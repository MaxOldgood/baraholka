import { CartProductList } from '../../widgets/cart-product-list'
import { CartTotal } from '../../widgets/cart-total'
import styles from './cart.module.scss'

export function Cart() {
  return (
    <div className={`${styles.cart} container`}>
      <h1 className={styles.cart__title}>Your cart</h1>
      <div className={styles.cart__inner}>
        <div className={styles.cart__products}>
          <CartProductList />
        </div>
        <div className={styles.cart__total}>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}
