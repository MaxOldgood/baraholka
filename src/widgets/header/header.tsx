import { BurgerMenu } from '../../features/burger-menu/burger-menu'
import { Menu } from '../../features/menu'
import { HeaderIcons } from '../../shared/ui/header-icons/header-icons'
import { Logo } from '../../shared/ui/logo'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Menu className={styles.header__menu} />
      <BurgerMenu className={styles.header__burger_menu} />
      <Logo className={styles.header__logo} />
      <HeaderIcons className={styles.header__icons} />
    </header>
  )
}
