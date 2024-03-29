import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { CartProductCard } from '../../entities/cart/ui/cart-product-card'
import { CartProduct } from '../../entities/product/model/types'
import { CartProductCounter } from '../../features/cart-product-counter'
import { DeleteFromCart } from '../../features/delete-from-cart'
import { Button } from '../../shared/ui/button'
import styles from './cart-product-list.module.scss'

export function CartProductList() {
  const products = useAppSelector((state) => state.cart.products)
  if (products.length === 0) {
    return (
      <div className={`${styles.message} `}>
        <div className={styles.message__image_wrapper}>
          <img
            className={styles.message__image}
            src="https://images.unsplash.com/photo-1532348052855-cd085176b696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
          />
        </div>
        <div className={styles.message__body}>
          <h3 className={styles.message__text}>Your cart is empty</h3>
          <Link to={'/baraholka/'}>
            <Button className={styles.message__button} text="go shopping!" />
          </Link>
        </div>
      </div>
    )
  } else
    return (
      <div className={styles.container}>
        <ul className={styles.product_list}>
          {products?.map((product: CartProduct) => {
            return (
              <CartProductCard
                key={product.id}
                product={product}
                upperActionSlot={<DeleteFromCart productId={product.id} />}
                bottomActionSlot={<CartProductCounter product={product} />}
              />
            )
          })}
        </ul>
      </div>
    )
}
