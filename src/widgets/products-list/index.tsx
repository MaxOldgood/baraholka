import { useAppSelector } from '../../app/hooks'
import { ProductCard, type Product } from '../../entities/product'
import styles from './products-list.module.scss'

interface ProductListProps {
  products: Product[]
}

export function ProductsList(props: ProductListProps) {
  const { products } = props

  const sortBy = useAppSelector((state) => state.sort.sortBy)
  const ascendent = useAppSelector((state) => state.sort.ascendent)

  products.sort((productA, productB) =>
    ascendent ? productA[sortBy] - productB[sortBy] : productB[sortBy] - productA[sortBy],
  )

  return (
    <div className={`${styles.product_list} container`}>
      {products?.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}
