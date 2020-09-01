import React from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'

export const SiteHeader: React.FC = () => {
  const router = useRouter()

  const handleClickLogo = React.useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a onClick={handleClickLogo}>
          <div>凄いブログ</div>
        </a>
      </div>
      <div className={styles.right}>
        <img className={styles.userIcon} src="/profile.png" />
      </div>
    </header>
  )
}
