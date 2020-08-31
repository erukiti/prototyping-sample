export type FormattedDate = {
  datetime: string
  isNew: boolean
  // FIXME: n年前の記事です、のような情報は後でここに追加する
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  return {
    datetime: '',
    isNew: false,
  }
}
