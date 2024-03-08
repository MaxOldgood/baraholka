import { useGetAllProductsQuery } from '../../shared/api/products-slice'
import { ProductCard } from '../../widgets/product-card'
import styles from './shop.module.scss'

export function Shop() {
  const { data } = useGetAllProductsQuery(1)
  console.log(data)
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
    </div>
  )
}
