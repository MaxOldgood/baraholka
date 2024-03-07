import { Link } from 'react-router-dom'
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
      <Link className={styles.link} to="/user">
        <User className={styles.image} height="30" />
      </Link>
      <Link className={styles.link} to="/cart">
        <Cart className={styles.image} height="30" />
      </Link>
    </div>
  )
}
