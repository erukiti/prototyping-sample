export type FormattedDate = {
  datetime: string
  isNew: boolean
  // FIXME: n年前の記事です、のような情報は後でここに追加する
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  return {
    datetime: '2020/8/25 17:58:53',
    isNew: true,
  }
}
