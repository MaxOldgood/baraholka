import { ProductCard, type Product } from '../../entities/product'
import styles from './products-list.module.scss'

interface ProductListProps {
  products: Product[]
}

export function ProductsList(props: ProductListProps) {
  const { products } = props
  return (
    <div className={`${styles.product_list} container`}>
      {products?.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}
