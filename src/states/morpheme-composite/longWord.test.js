import test from 'ava'
import json from './longWord.json'
import { composite } from '../morpheme'

test('composite/longWord', t => {
  const result = composite(json).map(item => item.word)
  t.deepEqual(result, [
    '最近イライラ',
    'してしまいがち、',
    'という人は',
    '睡眠不足なのかも？',
  ])
})
