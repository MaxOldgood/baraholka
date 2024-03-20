import { HeaderIcons } from '../../shared/ui/header-icons/header-icons'
import { Logo } from '../../shared/ui/logo'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo className={styles.header__logo} />
      <HeaderIcons className={styles.header__icons} />
    </header>
  )
}
