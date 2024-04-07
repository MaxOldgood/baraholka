import { HeaderIcons, Logo } from '../../shared/ui'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo className={styles.header__logo} />
      <HeaderIcons className={styles.header__icons} />
    </header>
  )
}
