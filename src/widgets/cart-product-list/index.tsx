import { Link } from 'react-router-dom'
import { CartProductCard } from '../../entities/cart'
import { CartProduct } from '../../entities/product'
import { CountCardProducts, DeleteFromCart } from '../../features'
import cartImage from '../../shared/assets/img/cart.jpg'
import { useAppSelector } from '../../shared/hooks'
import { Button } from '../../shared/ui'
import styles from './cart-product-list.module.scss'

export function CartProductList() {
  const products = useAppSelector((state) => state.cart.products)
  if (products.length === 0) {
    return (
      <div className={`${styles.message} `}>
        <div className={styles.message__image_wrapper}>
          <img className={styles.message__image} src={cartImage} loading="lazy" />
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
                bottomActionSlot={<CountCardProducts product={product} />}
              />
            )
          })}
        </ul>
      </div>
    )
}
