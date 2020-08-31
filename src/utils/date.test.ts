import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-08-25 17:58:53')
  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020/08/25 17:58',
      isNew: true,
    })
  })
})
