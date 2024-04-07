import { MouseEvent } from 'react'
import { deleteProduct } from '../../entities/cart'
import DeleteIcon from '../../shared/assets/icons/delete.svg?react'
import { useAppDispatch } from '../../shared/hooks'
import styles from './delete-from-cart.module.scss'

interface DeleteFromCartProps {
  productId: number
}

export function DeleteFromCart(props: DeleteFromCartProps) {
  const dispatch = useAppDispatch()
  const { productId } = props

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
