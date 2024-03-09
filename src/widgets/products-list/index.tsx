import { useState } from 'react'
import { useGetAllProductsQuery } from '../../shared/api/products-slice'
import { ProductCard } from '../product-card'
import styles from './products-list.module.scss'

export function ProductsList() {
  const [limit, setLimit] = useState(8)
  const { data: allProducts, isSuccess } = useGetAllProductsQuery(limit)
  console.log(allProducts)
  function handleMoreButtonClick() {
    setLimit(limit + 8)
  }
  return (
    <div className={`${styles.product_list} container`}>
      {isSuccess &&
        allProducts.map((product) => {
          return <ProductCard image={product.image} price={product.price} title={product.title} key={product.id} />
        })}
      <button onClick={handleMoreButtonClick}>More</button>
    </div>
  )
}
