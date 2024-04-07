import { CartProduct } from '../../entities/product'
import { useAppSelector } from '../../shared/hooks'
import { Button } from '../../shared/ui/'
import { CartTotalString } from './cart-total-string'
import styles from './cart-total.module.scss'

interface CartTotalProps {
  className?: string
}

export function CartTotal(props: CartTotalProps) {
  const { className = '' } = props
  const products = useAppSelector((state) => state.cart.products)

  const sum = parseFloat(
    products
      .reduce((sum, currentProduct: CartProduct) => sum + currentProduct.price * currentProduct.count, 0)
      .toFixed(2),
  )
  const discount = parseFloat((sum * 0.1).toFixed(2))
  const deliveryFee = parseFloat((sum * 0.05).toFixed(2))
  const total = parseFloat((sum - discount + deliveryFee).toFixed(2))

  return (
    <div className={`${styles.cart_total} ${products.length === 0 && styles.disabled} ${className} container`}>
      <h3 className={styles.cart_total__title}>Order summary</h3>
      <hr className={styles.divider} />
      <CartTotalString text={'Subtotal'} sum={sum.toFixed(2)} />
      <CartTotalString text={'Discount'} sum={discount.toFixed(2)} />
      <CartTotalString text={'Delivery Fee'} sum={deliveryFee.toFixed(2)} />
      <hr className={styles.divider} />

      <CartTotalString text={'Total'} sum={total.toFixed(2)} />

      <hr className={styles.divider} />
      <Button disabled={sum === 0} className={styles.cart_total__checkout_button} text="checkout" />
    </div>
  )
}
