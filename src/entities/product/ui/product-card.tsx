import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../model/types'
import styles from './product-card.module.scss'

interface ProductCardProps {
  product: Product
  actionSlot?: ReactNode
  className: string
}

export function ProductCard(props: ProductCardProps) {
  const { product, actionSlot, className } = props
  const { title, price, images } = product
  return (
    <Link to={`/baraholka/product/${product.id}`}>
      <div className={`${styles.product_card} ${styles[className]}`}>
        <div className={styles.product_card__image_wrapper}>
          <img className={styles.product_card__image} src={images[0]} alt={title} loading="lazy" />
        </div>
        <div className={styles.product_card__header}>
          <div className={styles.product_card__title}>
            <p className={styles.product_card__name}>{title}</p>
          </div>
          <div className={styles.product_card__bottom}>
            <p className={styles.product_card__price}>${price}</p>
            {actionSlot && <div className={styles.product_card__action}>{actionSlot}</div>}
          </div>
        </div>
      </div>
    </Link>
  )
}
