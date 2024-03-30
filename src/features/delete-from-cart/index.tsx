import { MouseEvent } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { deleteProduct } from '../../entities/cart/model/cart-slice'
import DeleteIcon from '../../shared/assets/icons/delete.svg?react'
import styles from './delete-from-cart.module.scss'

interface DeleteFromCartProps {
  productId: number
}

export function DeleteFromCart(props: DeleteFromCartProps) {
  const { productId } = props
  const dispatch = useAppDispatch()
  function handleClick(e: MouseEvent) {
    e.preventDefault()
    dispatch(deleteProduct(productId))
  }
  return (
    <button className={styles.icon_button} onClick={handleClick}>
      <DeleteIcon className={styles.icon_button__icon} />
    </button>
  )
}
