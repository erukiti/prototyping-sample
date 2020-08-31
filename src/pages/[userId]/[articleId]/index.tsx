import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'

import { useGetArticleQuery } from '@/generated/graphql'

import styles from './index.module.css'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { loading, error, data } = useGetArticleQuery({
    variables: {
      id: articleId as string,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }
  if (error) {
    return <p>{error.toString()}</p>
  }

  if (!data || !data.articles_by_pk) {
    return <Error statusCode={404} />
  }

  const { user, subject, content } = data.articles_by_pk

  return (
    <div className={styles.contentContainer}>
      <div>{JSON.stringify(user)}</div>
      <div>{subject}</div>
      <div>{content}</div>
    </div>
  )
}

export default ArticlePage
