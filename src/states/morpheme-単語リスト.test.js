import test from 'ava'
import json from './json/単語リスト.json'
import { composite } from './morpheme'

test('composite/単語リスト', t => {
  const result = composite(json)

  t.deepEqual(result, [
    '以下の各',
    '項目を参照。',
    '天動説',
    '地動説',
    '蓋天説',
    '渾天説',
    '宣夜説',
  ])
})
