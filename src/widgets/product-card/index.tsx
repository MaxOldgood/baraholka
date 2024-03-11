import Like from '../../shared/assets/icons/like.svg?react'
import styles from './product-card.module.scss'

interface ProductCardProps {
  image: string
  price: string
  title: string
}

export function ProductCard(props: ProductCardProps) {
  const { image, price, title } = props
  return (
    <div className={styles.product_card}>
      <img className={styles.product_card__image} src={image} alt={title} width={293} height={293} loading="lazy" />
      <div className={styles.product_card__header}>
        <div className={styles.product_card__title}>
          <p className={styles.product_card__name}>{title}</p>
          <Like className={styles.product_card__like} />
        </div>
        <p className={styles.product_card__price}>${price}</p>
      </div>
    </div>
  )
}
