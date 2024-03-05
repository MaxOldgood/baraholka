import styles from './index.module.scss'

export function Logo() {
  return (
    <a className={styles.logo} href="/">
      <h2 className={styles.logo__text}> BARAHOLKA</h2>
    </a>
  )
}
