import Burger from '../../shared/assets/icons/burger.svg?react'
import styles from './burger-menu.module.scss'

interface BurgerMenuProps {
  className: string
}

export function BurgerMenu(props: BurgerMenuProps) {
  const { className } = props
  return (
    <button className={`${styles.button} visible-mobile`}>
      <Burger className={styles.burger} />
    </button>
  )
}
