import React from 'react'

import styles from './index.module.css'

const Paragraph: React.FC<{ p: string }> = ({ p }) => {
  return <div className={styles.paragraph}>{p}</div>
}

type Props = {
  content: string
}

export const Article: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.split('\n\n').map((p, i) => (
        <Paragraph p={p} key={i} />
      ))}
    </>
  )
}
