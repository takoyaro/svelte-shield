import kuromoji from 'kuromoji'
import { get, writable } from 'svelte/store'
import sleep from '../utils/sleep'

export const word = writable('　')
export const isLoading = writable(true)
export const isPlay = writable(false)
export const errorMsg = writable('')
export const rawText = writable('')
export const hiddenSettings = writable({
  judgeNum: 3,
})
// モック用
export const ignoreReading = writable(false)

const initP = init()

async function init() {
  // 初期描画が終わったあとに辞書データを読み込む。
  await sleep(0)

  return new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: './dict/' }).build(function(err, tokenizer) {
      if (get(ignoreReading)) {
        return
      }

      if (err) {
        isLoading.set(false)
        errorMsg.set('辞書取得エラー')
        reject()
        return
      }

      isLoading.set(false)
      resolve(tokenizer)
    })
  })
}

export async function tokenize() {
  const tokenizer = await initP

  const path = tokenizer.tokenize(get(rawText))

  for (const message of composite(path)) {
    if (!get(isPlay)) {
      word.set('　')
      return
    }

    word.set(message)

    await sleep(localStorage.intervalMs)
  }

  isPlay.set(false)
}

export function getWord(composition) {
  return composition.reduce((str, path) => str + path.surface_form, '').trim()
}

export function initComposition(compositions, index) {
  if (!compositions[index]) {
    compositions.push([])
  }
}

export function isPunctuation(item) {
  return item.pos_detail_1 === '句点' || item.pos_detail_1 === '読点'
}

export function isRelationalNoun(item) {
  return item.pos === '名詞' || hasStrongConnectionNoun(item)
}

export function hasStrongConnectionNoun(item) {
  return item.pos === '連体詞' || item.pos === '接頭詞'
}

export function isRelationalVerb(item) {
  return (
    item.pos === '動詞' ||
    item.pos === '助動詞' ||
    item.pos_detail_1 === '形容動詞語幹'
  )
}

export function composite(path) {
  const compositions = []
  let currentIndex = 0
  const { judgeNum } = get(hiddenSettings)

  path.forEach(item => {
    // 初期化
    initComposition(compositions, currentIndex)
    let composition = compositions[currentIndex]

    // 事前判定
    // 設定した判定数を超えたら繰り上げ
    if (getWord(composition).length > judgeNum) {
      ++currentIndex
      // 句読点が先頭以外にあれば繰り上げ
    } else if (isPunctuation(item) && composition.length > 0) {
      ++currentIndex
    } else if (/\n/.test(item.surface_form)) {
      ++currentIndex
      return
    }

    // 事前判定により再初期化
    initComposition(compositions, currentIndex)
    composition = compositions[currentIndex]
    const prevComposition = compositions[currentIndex - 1]
    const prevCompositionLastItem =
      prevComposition && prevComposition[prevComposition.length - 1]

    // 句読点・助詞など、先頭に来ると表示がおかしく見えるものは、ひとつ前に結合させる。
    if (
      composition.length === 0 &&
      (isPunctuation(item) ||
        (item.pos === '助詞' &&
        !(item.surface_form.length > judgeNum) && // 設定文字数を越えている助詞は独立させる
          prevCompositionLastItem &&
          !isPunctuation(prevCompositionLastItem)) ||
        item.pos_detail_1 === '括弧閉' ||
        item.pos_detail_1 === '接尾' ||
        item.surface_form === ')' ||
        item.surface_form === ']' ||
        item.surface_form === '？' ||
        (item.pos_detail_1 === '数' &&
          prevCompositionLastItem &&
          prevCompositionLastItem.pos_detail_1 === 'サ変接続')) &&
      prevComposition
    ) {
      prevComposition.push(item)
      // 名詞が先頭で、一つ前が名詞と強く関連のある品詞だった場合、取り除き結合する。
    } else if (
      composition.length === 0 &&
      item.pos === '名詞' &&
      prevCompositionLastItem &&
      hasStrongConnectionNoun(prevCompositionLastItem)
    ) {
      composition.push(prevComposition.pop(), item)
      // 助動詞が先頭で、一つ前が動詞関連だった場合、取り除き結合させる
    } else if (
      composition.length === 0 &&
      item.pos === '助動詞' &&
      prevCompositionLastItem &&
      isRelationalVerb(prevCompositionLastItem)
    ) {
      composition.push(prevComposition.pop(), item)

      // 2~3前も動詞関連だった場合、さらに結合させる。
      let lastItem = prevComposition[prevComposition.length - 1]
      if (lastItem && isRelationalVerb(lastItem)) {
        composition.unshift(prevComposition.pop())
      }
      lastItem = prevComposition[prevComposition.length - 1]
      if (lastItem && isRelationalVerb(lastItem)) {
        composition.unshift(prevComposition.pop())
      }
      // サ変接続でかつ、一つ前が数であった場合、取り除き結合する。
    } else if (
      item.pos_detail_1 === 'サ変接続' &&
      prevCompositionLastItem &&
      prevCompositionLastItem.pos_detail_1 === '数'
    ) {
      composition.push(prevComposition.pop(), item)
      // それ以外は通常追加する。
    } else {
      composition.push(item)
    }
  })

  return compositions
    .reduce((result, item, index) => {
      const word = getWord(item)
      const nextComposition = compositions[index + 1]

      if (/・/.test(word)) {
        // ・の前に２文字以上の文字があるものを、・を含んで区切る
        const splitted = word.split(/(?<=[^・]{2,}・)/)

        result.push(...splitted)

        return result
        // １文字になっている単語は次のアイテムの先頭に結合させる。
      } else if (word.length === 1 && nextComposition) {
        nextComposition.unshift(...item)

        return result
      } else {
        result.push(word)

        return result
      }
    }, [])
    .filter(item => item)
}
