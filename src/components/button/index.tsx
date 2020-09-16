import React from 'react'

import { useClassNames } from '@/utils'

import styles from './index.module.css'

type Props =
  | (React.ComponentPropsWithRef<'button'> & { as?: 'button' })
  | (React.ComponentPropsWithRef<'a'> & { as: 'a' })

export const Button: React.FC<Props> = ({
  className,
  children,
  as = 'button',
  ...rest
}) => {
  const _className = useClassNames(styles.button, className)
  return React.createElement(as, { ...rest, className: _className }, children)
}
