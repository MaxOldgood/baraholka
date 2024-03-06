import styles from './index.module.scss'

interface LogoProps {
  className: string
}

export function Logo(props: LogoProps) {
  const { className } = props
  return (
    <a className={`${styles.logo}  ${className}`} href="/">
      <h2 className={styles.logo__text}> BARAHOLKA</h2>
    </a>
  )
}
