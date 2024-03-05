import Cart from '../../assets/icons/cart.svg?react'
import User from '../../assets/icons/user.svg?react'
import styles from './header-icons.module.scss'

export function HeaderIcons() {
  return (
    <div className={styles.icons}>
      <a className={styles.link} href="/">
        <User className={styles.image} height="20" />
      </a>
      <a className={styles.link} href="/">
        <Cart className={styles.image} height="20" />
      </a>
    </div>
  )
}
