import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { type Product } from '../model/types'
import styles from './product-card.module.scss'

interface ProductCardProps {
  product: Product
  actionSlot?: ReactNode
}

export function ProductCard(props: ProductCardProps) {
  const { product, actionSlot } = props
  const { title, price, images } = product
  return (
    <Link to={`product/${product.id}`}>
      <div className={styles.product_card}>
        <div className={styles.product_card__image_wrapper}>
          <img className={styles.product_card__image} src={images[0]} alt={title} loading="lazy" />
        </div>
        <div className={styles.product_card__header}>
          <div className={styles.product_card__title}>
            <p className={styles.product_card__name}>{title}</p>
            {actionSlot && <div className={styles.product_card__action}>{actionSlot}</div>}
          </div>
          <p className={styles.product_card__price}>${price}</p>
        </div>
      </div>
    </Link>
  )
}
