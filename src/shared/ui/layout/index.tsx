import { ReactNode } from 'react'
import classes from '../layout/layout.module.scss'

interface LayoutProps {
  header: ReactNode
  content: ReactNode
}

export function Layout({ header, content }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__header}>{header}</div>
      <div className={`${classes.layout__content}`}>{content}</div>
    </div>
  )
}
