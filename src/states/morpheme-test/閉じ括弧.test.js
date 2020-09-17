import test from 'ava'
import json from './閉じ括弧.json'
import { composite } from '../morpheme'

test('composite/閉じ括弧', t => {
  const result = composite(json)
  t.deepEqual(result, [
    '人体の',
    '器官の',
    '分類、',
    '組成',
    '人体の',
    '組成',
    '70kgの',
    '体重の',
    'ヒト',
    '[7]',
    '成分 \t重量',
  ])
})
