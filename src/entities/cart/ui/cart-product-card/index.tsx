import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CartProduct } from '../../../product/model/types'
import styles from './cart-product-card.module.scss'

interface CartProductCardProps {
  product: CartProduct
  upperActionSlot: ReactNode
  bottomActionSlot: ReactNode
}

export function CartProductCard(props: CartProductCardProps) {
  const { product, upperActionSlot, bottomActionSlot } = props
  const { title, price, images, count } = product

  return (
    <Link to={`/baraholka/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.card__image_wrapper}>
          <img
            className={`${styles.card__image} ${count === 0 && styles.image_gray}`}
            src={images[0]}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.card__upper}>
            <div className={styles.card__info}>
              <p className={styles.card__title}>{title}</p>
            </div>
            {upperActionSlot}
          </div>
          <div className={styles.card__bottom}>
            <p className={styles.card__price}>${price * count}</p>
            {bottomActionSlot}
          </div>
        </div>
      </div>
    </Link>
  )
}
