import test from 'ava'
import json from './json/as-a-man-thinketh.json'
import { composite } from './morpheme'

test('composite/as-a-man-thinketh', t => {
  const result = composite(json)

  t.deepEqual(result, [
    'あなたが',
    '見ている',
    '世界は万華鏡',
    'であり、',
    'その',
    '様々な色の',
    '組み合わせは、',
    'その瞬間ごとの',
    'あなた自身の',
    '動き続ける',
    '思考によって、',
    '絶妙に調整',
    'されたもの',
    'です。',
  ])
})
