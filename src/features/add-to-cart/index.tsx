import { useAppDispatch } from '../../app/hooks'
import { addProduct } from '../../entities/cart/model/cart-slice'
import AddToCartIcon from '../../shared/assets/icons/add-to-cart.svg?react'
import styles from './add-to-cart.module.scss'

export function AddToCart(props) {
  const { product } = props

  const dispatch = useAppDispatch()

  function handleClick(e) {
    e.preventDefault()
    dispatch(addProduct({ ...product, count: 1 }))
  }

  return (
    <button title="add to cart" className={styles.button} onClick={handleClick}>
      <AddToCartIcon className={styles.icon} />
    </button>
  )
}
