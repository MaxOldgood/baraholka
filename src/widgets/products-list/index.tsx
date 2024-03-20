import { Product } from '../../shared/api/products-slice'
import { ProductCard } from '../product-card'
import styles from './products-list.module.scss'

interface ProductListProps {
  products: Product[]
}

export function ProductsList(props: ProductListProps) {
  const { products } = props
  return (
    <div className={`${styles.product_list} container`}>
      {products?.map((product) => {
        return <ProductCard image={product.images[0]} price={product.price} title={product.title} key={product.id} />
      })}
    </div>
  )
}
