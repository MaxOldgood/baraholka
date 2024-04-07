import { Link } from 'react-router-dom'
import Cart from '../../assets/icons/cart.svg?react'
import { useAppSelector } from '../../hooks'
import styles from './header-icons.module.scss'

interface HeaderIconProps {
  className: string
}

export function HeaderIcons(props: HeaderIconProps) {
  const { className } = props

  const cartProductsNumber = useAppSelector((state) => state.cart.products.length)

  return (
    <div className={`${styles.icons}  ${className}`}>
      <Link className={styles.link} to="/baraholka/cart">
        <Cart className={styles.cart_image} height="20"></Cart>
        {cartProductsNumber > 0 && <span className={styles.cart_image__badge}>{cartProductsNumber}</span>}
      </Link>
    </div>
  )
}
