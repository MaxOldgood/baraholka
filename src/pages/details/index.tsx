import { useParams } from 'react-router-dom'
import { CartProduct } from '../../entities/product'
import { AddToCart, CountCardProducts } from '../../features'
import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from '../../shared/api/api-slice'
import { useAppSelector } from '../../shared/hooks'
import { Loader } from '../../shared/ui'
import { ProductsList } from '../../widgets'
import { ErrorPage } from '../error'
import styles from './details.module.scss'

export function Details() {
  const { productId } = useParams()
  const { data: product, isSuccess: isGetProductSuccess, isLoading, isError } = useGetProductByIdQuery(productId)
  const cartProducts: CartProduct[] = useAppSelector((state) => state.cart.products)
  const { data: thisCategoryProductsData, isSuccess: isGetCategoryProductsSuccess } = useGetProductsByCategoryQuery(
    product?.category,
  )

  console.log(thisCategoryProductsData)

  return (
    <div className={`${styles.details} `}>
      {isLoading && <Loader />}
      {isError && <ErrorPage />}
      {isGetProductSuccess && (
        <div className={`${styles.details__inner} container`}>
          <div className={styles.details__image_wrapper}>
            <img className={styles.details__image} src={product.images[0]} />
          </div>
          <div className={styles.details__body}>
            <h1 className={styles.details__title}>{product.title}</h1>
            <div className={styles.details__subtitle}>
              <span className={styles.details__price}>${product.price}</span>
              <span className={styles.details__rating}>Rating: {product.rating}</span>
            </div>
            <p className={styles.details__description}>{product.description}</p>
            <div className={styles.details__action}>
              {cartProducts.find((cartProduct) => cartProduct.id === product.id) ? (
                <CountCardProducts
                  className={styles.counter}
                  deleteIfZero={true}
                  product={cartProducts.filter((cartProduct) => cartProduct.id === product.id)[0]}
                />
              ) : (
                <AddToCart product={product} variant="text" />
              )}
            </div>
          </div>
        </div>
      )}
      {isGetProductSuccess && isGetCategoryProductsSuccess && (
        <div className={styles.details__more}>
          <h2 className={styles.details__more_title}>You might also like</h2>
          <div className={styles.details__More_list}>
            <ProductsList variant="secondary" products={thisCategoryProductsData.products} doSort={false} />
          </div>
        </div>
      )}
    </div>
  )
}
