import { Users } from '@/generated/graphql'
import { UserIcon } from '@/components/user-icon'
import { formatDate } from '@/utils/date'
import { Button } from '@/components/button'
import styles from './index.module.css'

type ArticleHeaderProps = {
  subject: string
  user: Pick<Users, 'displayId' | 'displayName'>
  publishedAt: string
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  subject,
  user,
  publishedAt,
}) => {
  const { datetime, isNew } = formatDate(new Date(publishedAt), new Date())
  return (
    <>
      <h1 className={styles.subject}>{subject}</h1>

      <div className={styles.userContainer}>
        <div>
          <UserIcon src="/profile.png" />
        </div>
        <div className={styles.userText}>
          <div className={styles.userName}>
            {user.displayName} <Button>Follow</Button>
          </div>
          <div className={styles.publishedAt}>
            <span>{datetime}</span>
            {isNew ? <span className={styles.newContent}>New</span> : ''}
            <span>&nbsp; 約4分で読めます。</span>
          </div>
        </div>
      </div>
    </>
  )
}
