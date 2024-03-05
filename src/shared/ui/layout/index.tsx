import classes from '../layout/layout.module.scss'

export function Layout() {
  return (
    <div className={classes.layout}>
      <div className={classes.layout__header}>Header</div>
      <div className={classes.layout__content}>Место под контент</div>
    </div>
  )
}
