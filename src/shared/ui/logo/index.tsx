import { Link } from 'react-router-dom'
import styles from './index.module.scss'

interface LogoProps {
  className: string
}

export function Logo(props: LogoProps) {
  const { className } = props
  return (
    <Link className={`${styles.logo}  ${className}`} to="/">
      <h2 className={styles.logo__text}> BARAHOLKA</h2>
    </Link>
  )
}
