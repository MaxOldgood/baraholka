import { ProductCard } from '../../widgets/product-card'
import styles from './shop.module.scss'

export function Shop() {
  return (
    <div className={`${styles.shop} container`}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
