import { ReactNode } from 'react'
import classes from '../layout/layout.module.scss'

interface LayoutProps {
  header: ReactNode
}

export function Layout({ header }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__header}>{header}</div>
      <div className={classes.layout__content}></div>
    </div>
  )
}
