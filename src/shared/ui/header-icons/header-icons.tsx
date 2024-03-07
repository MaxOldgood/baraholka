import { Link } from 'react-router-dom'
import Cart from '../../assets/icons/cart.svg?react'
import User from '../../assets/icons/user.svg?react'
import Jul from '../../assets/icons/Юличка.png'
import styles from './header-icons.module.scss'

interface HeaderIconProps {
  className: string
}

export function HeaderIcons(props: HeaderIconProps) {
  const { className } = props

  return (
    <div className={`${styles.icons}  ${className}`}>
      <Link className={styles.link} to="/baraholka/jul">
        <img className={styles.jul} src={Jul} alt="" height={30} />
      </Link>
      <Link className={styles.link} to="/baraholka/user">
        <User className={styles.image} height="30" />
      </Link>
      <Link className={styles.link} to="/baraholka/cart">
        <Cart className={styles.image} height="30" />
      </Link>
    </div>
  )
}
