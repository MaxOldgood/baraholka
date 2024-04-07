import { Link } from 'react-router-dom'
import { Button } from '../../shared/ui'
import styles from './error.module.scss'

export function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>Oops, no such page!</h1>
      <Link to={'/baraholka/'}>
        <Button text="Go shopping!" />
      </Link>
    </div>
  )
}
