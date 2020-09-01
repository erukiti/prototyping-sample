import { NextPage } from 'next'
import React from 'react'
import autosize from 'autosize'

import styles from './index.module.css'

const PostPage: NextPage = () => {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      autosize(ref.current)
    }
  }, [])

  return (
    <div className={styles.editContent}>
      <input className={styles.subject} type="text" placeholder="タイトル" />
      <textarea
        className={styles.editor}
        placeholder="本文を書きましょう"
        ref={ref}
      />
    </div>
  )
}

export default PostPage
