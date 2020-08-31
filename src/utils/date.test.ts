import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-08-25 17:58:53')

  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020/08/25 17:58',
      isNew: true,
    })
  })

  test('一週間経過', () => {
    expect(formatDate(new Date('2020/08/18 17:58:53'), now)).toEqual({
      datetime: '2020/08/18 17:58',
      isNew: false,
    })
  })
})
