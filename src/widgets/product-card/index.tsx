import Like from '../../shared/assets/icons/like.svg?react'
import styles from './product-card.module.scss'

export function ProductCard() {
  return (
    <div className={styles.product_card}>
      <img className={styles.product_card__image} src="" alt="product name" width={293} height={293} />
      <div className={styles.product_card__header}>
        <span className={styles.product_card__name}>Product Name</span>
        <Like className={styles.product_card__like} />
      </div>
      <span className={styles.product_card__price}>$9.99</span>
    </div>
  )
}
