import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'

import { useGetArticleQuery } from '@/generated/graphql'
import { Article } from '@/components/article'
import { ArticleHeader } from '@/components/article/article-header'
import { AritcleFooter } from '@/components/article/article-footer'
import { SiteHeader } from '@/components/site-header'

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

  const { user, subject, content, publishedAt } = data.articles_by_pk
  if (!publishedAt) {
    return <Error statusCode={404} />
  }
  const articleHeaderProps = { user, subject, publishedAt }

  return (
    <>
      <SiteHeader />
      <div className={styles.contentContainer}>
        <ArticleHeader {...articleHeaderProps} />
        <div className={styles.content}>
          <Article content={content} />
        </div>
        <AritcleFooter user={user} />
      </div>
    </>
  )
}

export default ArticlePage
