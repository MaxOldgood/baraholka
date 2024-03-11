import { useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../../shared/api/products-slice'
import { Button } from '../../shared/ui/button'
import { Loader } from '../../shared/ui/loader'
import { ProductCard } from '../product-card'
import styles from './products-list.module.scss'

export function ProductsList() {
  const [limit, setLimit] = useState(8)
  const { data: allProducts = [] } = useGetAllProductsQuery()
  const { data: partOfProducts = [], isSuccess, isLoading, isFetching, isError } = useGetAllProductsQuery(limit)

  function handleMoreButtonClick() {
    setLimit(limit + 8)
  }

  const hasMoreToShow = allProducts.length <= limit ? false : true

  return (
    <div className={`${styles.product_list} container`}>
      {isSuccess &&
        partOfProducts.map((product) => {
          return <ProductCard image={product.image} price={product.price} title={product.title} key={product.id} />
        })}
      {(isLoading || isFetching) && <Loader className={styles.product_list__loader} />}

      {isSuccess && hasMoreToShow && (
        <Button className={styles.product_list__button} text="show more" onClick={handleMoreButtonClick} />
      )}
    </div>
  )
}
