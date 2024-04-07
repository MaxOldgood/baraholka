import { CartProduct, CategoryProduct, ProductCard, type Product } from '../../entities/product'
import { AddToCart, CountCardProducts } from '../../features'
import { useAppSelector } from '../../shared/hooks'
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
  const cartProducts = useAppSelector((state) => state.cart.products)

  doSort &&
    products.sort((productA, productB) =>
      ascendent ? productA[sortBy] - productB[sortBy] : productB[sortBy] - productA[sortBy],
    )

  function isProductInCart(product: Product) {
    return cartProducts.find((cartProduct) => cartProduct.id === product.id)
  }

  function defineActionSlot(product: Product) {
    if (isProductInCart(product)) {
      return (
        <CountCardProducts
          className={styles.counter}
          deleteIfZero={true}
          product={cartProducts.filter((cartProduct) => cartProduct.id === product.id)[0]}
        />
      )
    } else return <AddToCart product={product} />
  }

  return (
    <div className={`${styles.product_list} ${variant === 'secondary' && styles.secondary} `}>
      {products?.map((product: Product | CategoryProduct) => {
        return (
          <ProductCard
            className={isProductInCart(product) ? 'selected' : ''}
            product={product}
            key={product.id}
            actionSlot={defineActionSlot(product)}
          />
        )
      })}
    </div>
  )
}
