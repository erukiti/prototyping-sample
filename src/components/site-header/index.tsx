import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { UserIcon } from '@/components/user-icon'
import { Logo } from '@/components/logo'
import { Button } from '@/components/button'

import styles from './index.module.css'
import { SiteHeaderItem } from './item'

export { SiteHeaderItem }

type Props = {
  left?: JSX.Element
  right?: JSX.Element
}

export const SiteHeader: React.FC<Props> = ({ left, right }) => {
  const router = useRouter()

  const handleClickLogo = React.useCallback(() => {
    router.push('/')
  }, [router])

  const handleClickPost = React.useCallback(() => {
    router.push('/post')
  }, [router])

  const leftElement = left ? (
    left
  ) : (
    <a onClick={handleClickLogo}>
      <Logo />
    </a>
  )

  const rightElement = right ? (
    right
  ) : (
    <>
      <SiteHeaderItem>
        <Button as="a" onClick={handleClickPost}>
          <FontAwesomeIcon icon={faEdit} />
          &nbsp;
          <span>記事作成</span>
        </Button>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <UserIcon src="/profile.png" />
      </SiteHeaderItem>
    </>
  )
  return (
    <header className={styles.header}>
      <div className={styles.left}>{leftElement}</div>
      <div className={styles.right}>{rightElement}</div>
    </header>
  )
}
