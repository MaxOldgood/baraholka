import Cart from '../../assets/icons/cart.svg?react'
import User from '../../assets/icons/user.svg?react'
import styles from './header-icons.module.scss'

interface HeaderIconProps {
  className: string
}

export function HeaderIcons(props: HeaderIconProps) {
  const { className } = props

  return (
    <div className={`${styles.icons}  ${className}`}>
      <a className={styles.link} href="/">
        <User className={styles.image} height="30" />
      </a>
      <a className={styles.link} href="/">
        <Cart className={styles.image} height="30" />
      </a>
    </div>
  )
}
