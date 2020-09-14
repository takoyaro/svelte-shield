import test from 'ava'
import json from './json/kokoro.json'
import { composite } from './morpheme'

test('composite/kokoro', t => {
  const result = composite(json)

  t.deepEqual(result, [
    '私は',
    'その人を',
    '常に先生と',
    '呼んで',
    'いた。',
    'だからここでも',
    'ただ先生と',
    '書くだけで',
    '本名は',
    '打ち明けない。',
    'これは世間を',
    '憚かる遠慮と',
    'いうよりも、',
    'その方が',
    '私にとって',
    '自然だから',
    'である。',
    '私は',
    'その人の',
    '記憶を呼び',
    '起すごとに、',
    'すぐ「先生」と',
    'いいたく',
    'なる。',
    '筆を執っても',
    '心持は',
    '同じ事',
    'である。',
    'よそよそしい',
    '頭文字などは',
    'とても使う',
    '気に',
    'ならない。',
    '私が先生と',
    '知り合いに',
    'なったのは',
    '鎌倉である。',
    'その時私は',
    'まだ若々しい',
    '書生',
    'であった。',
    '暑中休暇を',
    '利用して',
    '海水浴に',
    '行った友達から',
    'ぜひ来いという',
    '端書を',
    '受け取ったので、',
    '私は多少の',
    '金を工面',
    'して、',
    '出掛ける',
    '事にした。',
    '私は金の',
    '工面に二、',
    '三日を',
    '費やした。',
    'ところが',
    '私が鎌倉に',
    '着いて三日と',
    '経たない',
    'うちに、',
    '私を',
    '呼び寄せた',
    '友達は、',
    '急に国元から',
    '帰れという',
    '電報を',
    '受け取った。',
    '電報には',
    '母が病気',
    'だからと',
    '断って',
    'あったけれども',
    '友達はそれを',
    '信じなかった。',
    '友達はかねてから',
    '国元にいる',
    '親たちに',
    '勧まない',
    '結婚を強いられて',
    'いた。',
    '彼は現代の',
    '習慣から',
    'いうと結婚',
    'するには',
    'あまり年が',
    '若過ぎた。',
    'それに肝心の',
    '当人が',
    '気に入らなかった。',
    'それで夏休みに',
    '当然',
    '帰るべき',
    'ところを、',
    'わざと避けて',
    '東京の近くで',
    '遊んで',
    'いたの',
    'である。',
    '彼は電報を',
    '私に見せて',
    'どう',
    'しようと',
    '相談を',
    'した。',
    '私にはどうして',
    'いいか',
    '分らなかった。',
    'けれども',
    '実際彼の',
    '母が病気',
    'であると',
    'すれば彼は',
    '固より',
    '帰るべき',
    'はず',
    'であった。',
    'それで彼は',
    'とうとう',
    '帰る事に',
    'なった。',
    'せっかく',
    '来た私は',
    '一人',
    '取り残された。',
    '学校の授業が',
    '始まるには',
    'まだ大分',
    '日数があるので',
    '鎌倉におっても',
    'よし、',
    '帰っても',
    'よいという',
    '境遇に',
    'いた私は、',
    '当分元の',
    '宿に留まる',
    '覚悟を',
    'した。',
    '友達は中国の',
    'ある資産家の',
    '息子で金に',
    '不自由の',
    'ない男',
    'であった',
    'けれども、',
    '学校が学校',
    'なのと年が',
    '年なので、',
    '生活の程度は',
    '私とそう',
    '変りも',
    'しなかった。',
    'したがって',
    '一人ぼっちに',
    'なった私は',
    '別に',
    '恰好な宿を',
    '探す面倒も',
    'もたなかった',
    'のである。',
    '宿は鎌倉でも',
    '辺鄙な方角に',
    'あった。',
    '玉突きだの',
    'アイスクリーム',
    'だのという',
    'ハイカラな',
    'ものには',
    '長い畷を',
    '一つ',
    '越さなければ',
    '手が',
    '届かなかった。',
    '車で行っても',
    '二十銭は',
    '取られた。',
    'けれども',
    '個人の別荘は',
    'そこここに',
    'いくつでも',
    '建てられて',
    'いた。',
    'それに海へは',
    'ごく近いので',
    '海水浴を',
    'やるには',
    '至極',
    '便利な地位を',
    '占めて',
    'いた。',
    '私は毎日',
    '海へはいりに',
    '出掛けた。',
    '古い燻ぶり',
    '返った藁葺の',
    '間を通り抜けて',
    '磯へ下りると、',
    'この辺に',
    'これほどの',
    '都会人種が',
    '住んでいるかと',
    '思うほど、',
    '避暑に',
    '来た男や',
    '女で砂の',
    '上が動いて',
    'いた。',
    'ある時は',
    '海の中が',
    '銭湯のように',
    '黒い頭で',
    'ごちゃごちゃ',
    'している',
    '事も',
    'あった。',
    'その中に',
    '知った人を',
    '一人も',
    'もたない',
    '私も、',
    'こういう',
    '賑やかな',
    '景色の中に',
    '裹まれて、',
    '砂の上に',
    '寝そべって',
    'みたり、',
    '膝頭を波に',
    '打たして',
    'そこいらを',
    '跳ね廻る',
    'のは',
    '愉快であった。',
    '私は実に',
    '先生を',
    'この雑沓の',
    '間に見付け',
    '出したの',
    'である。',
    'その時海岸には',
    '掛茶屋が',
    '二軒',
    'あった。',
    '私は',
    'ふとした機会から',
    'その一軒の',
    '方に行き',
    '慣れて',
    'いた。',
    '長谷辺に',
    '大きな別荘を',
    '構えている',
    '人と違って、',
    '各自に専有の',
    '着換場を',
    '拵えて',
    'いないここいらの',
    '避暑客には、',
    'ぜひとも',
    'こうした共同着',
    '換所といった',
    '風なものが',
    '必要なの',
    'であった。',
    '彼らはここで',
    '茶を飲み、',
    'ここで休息',
    'する外に、',
    'ここで海水着を',
    '洗濯させたり、',
    'ここで鹹は',
    'ゆい身体を',
    '清めたり、',
    'ここへ帽子や',
    '傘を預けたり',
    'するの',
    'である。',
    '海水着を',
    '持たない',
    '私にも持物を',
    '盗まれる',
    '恐れは',
    'あったので、',
    '私は海へは',
    'いるたびに',
    'その茶屋へ',
    '一切を脱ぎ',
    '棄てる事に',
    'していた。',
  ])
})
