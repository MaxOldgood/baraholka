import { useAppSelector } from '../../app/hooks'
import { CartProductList } from '../../widgets/cart-product-list'
import { CartTotal } from '../../widgets/cart-total'
import styles from './cart.module.scss'

export function Cart() {
  const isCartEmpty = useAppSelector((state) => state.cart.products.length === 0)

  return (
    <div className={`${styles.cart} container`}>
      <h1 className={styles.cart__title}>Your cart</h1>
      <div className={styles.cart__inner}>
        <div className={styles.cart__products}>
          <CartProductList />
        </div>
        <div className={styles.cart__total}>
          <CartTotal className={isCartEmpty ? 'hidden-tablet' : ''} />
        </div>
      </div>
    </div>
  )
}
