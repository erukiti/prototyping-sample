export type FormattedDate = {
  datetime: string
  isNew: boolean
  // FIXME: n年前の記事です、のような情報は後でここに追加する
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  const dtf = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  const [
    { value: year },
    ,
    { value: month },
    ,
    { value: day },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = dtf.formatToParts(d)

  const past = (now.getTime() - d.getTime()) / 1000
  const isNew = past < 24 * 60 * 60 * 7
  return {
    datetime: `${year}/${month}/${day} ${hour}:${minute}`,
    isNew,
  }
}
