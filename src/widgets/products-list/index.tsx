import { useAppSelector } from '../../app/hooks'
import { ProductCard, type Product } from '../../entities/product'
import { CartProduct } from '../../entities/product/model/types'
import { AddToCart } from '../../features/add-to-cart'
import { CartProductCounter } from '../../features/cart-product-counter'
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

  const cartProducts: CartProduct[] = useAppSelector((state) => state.cart.products)

  return (
    <div className={`${styles.product_list} `}>
      {products?.map((product: Product) => {
        return (
          <ProductCard
            className={cartProducts.find((cartProduct) => cartProduct.id === product.id) ? 'selected' : ''}
            product={product}
            key={product.id}
            actionSlot={
              cartProducts.find((cartProduct) => cartProduct.id === product.id) ? (
                <CartProductCounter
                  className={styles.counter}
                  deleteIfZero={true}
                  product={cartProducts.filter((cartProduct) => cartProduct.id === product.id)[0]}
                />
              ) : (
                <AddToCart product={product} />
              )
            }
          />
        )
      })}
    </div>
  )
}
