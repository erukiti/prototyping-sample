import { useRouter } from 'next/router'
import { NextPage } from 'next'

import { useGetArticleQuery } from '@/generated/graphql'

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
  return <div>{JSON.stringify(data)}</div>
}

export default ArticlePage
