import classes from '../layout/layout.module.scss'

export function Layout({ header }) {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__header}>{header}</div>
      <div className={classes.layout__content}></div>
    </div>
  )
}
