import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BurgerMenu } from '../../features/burger-menu/burger-menu'
import { Menu } from '../../features/menu'
import { HeaderIcons } from '../../shared/ui/header-icons/header-icons'
import { Logo } from '../../shared/ui/logo'
import styles from './header.module.scss'

export function Header() {
  const location = useLocation()
  console.log(location.pathname)
  const [dissappear, setDissappear] = useState(false)

  useEffect(() => {
    location.pathname === '/baraholka/jul' ? setDissappear(true) : setDissappear(false)
  }, [location.pathname])

  return (
    <header className={`${styles.header} ${dissappear && styles.header__disappear} container`}>
      <Menu className={styles.header__menu} />
      <BurgerMenu className={styles.header__burger_menu} />
      <Logo className={styles.header__logo} />
      <HeaderIcons className={styles.header__icons} />
    </header>
  )
}
