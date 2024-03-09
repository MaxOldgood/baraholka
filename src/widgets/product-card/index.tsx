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
      <img className={styles.product_card__image} src={image} alt={title} width={293} height={293} />
      <div className={styles.product_card__header}>
        <span className={styles.product_card__name}>{title}</span>
        <Like className={styles.product_card__like} />
      </div>
      <span className={styles.product_card__price}>${price}</span>
    </div>
  )
}
