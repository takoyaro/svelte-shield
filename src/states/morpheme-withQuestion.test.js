import test from 'ava'
import json from './json/withQuestion.json'
import { composite } from './morpheme'

test('composite/withQuestion', t => {
  const result = composite(json)

  t.deepEqual(result, [
    '「なんで',
    '結婚しないの？」',
    '「ずっと',
    '独身でいる',
    'つもり？」',
    '「早く安心',
    'させてくれ」',
  ])
})
