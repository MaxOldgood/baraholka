import { useAppDispatch } from '../../app/hooks'
import { deleteProduct } from '../../entities/cart/model/cart-slice'
import DeleteIcon from '../../shared/assets/icons/delete.svg?react'
import styles from './delete-from-cart.module.scss'

export function DeleteFromCart(props) {
  const { productId } = props
  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(deleteProduct(productId))
  }
  return (
    <button className={styles.icon_button} onClick={handleClick}>
      <DeleteIcon className={styles.icon_button__icon} />
    </button>
  )
}
