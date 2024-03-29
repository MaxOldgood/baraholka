import { useAppSelector } from '../../app/hooks'
import { ProductCard, type Product } from '../../entities/product'
import { CartProduct, CategoryProduct } from '../../entities/product/model/types'
import { AddToCart } from '../../features/add-to-cart'
import { CartProductCounter } from '../../features/cart-product-counter'
import styles from './products-list.module.scss'

interface ProductListProps {
  products: Product[] | CategoryProduct[]
  doSort?: boolean
  variant?: 'primary' | 'secondary'
}

export function ProductsList(props: ProductListProps) {
  const { products, doSort = true, variant = 'primary' } = props

  const sortBy = useAppSelector((state) => state.sort.sortBy)
  const ascendent = useAppSelector((state) => state.sort.ascendent)

  doSort &&
    products.sort((productA, productB) =>
      ascendent ? productA[sortBy] - productB[sortBy] : productB[sortBy] - productA[sortBy],
    )

  const cartProducts: CartProduct[] = useAppSelector((state) => state.cart.products)

  return (
    <div className={`${styles.product_list} ${variant === 'secondary' && styles.secondary} `}>
      {products?.map((product: Product | CategoryProduct) => {
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
