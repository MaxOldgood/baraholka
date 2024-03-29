import { MouseEvent } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addProduct } from '../../entities/cart/model/cart-slice'
import { Product } from '../../entities/product'
import AddToCartIcon from '../../shared/assets/icons/add-to-cart.svg?react'
import styles from './add-to-cart.module.scss'

interface AddToCartProps {
  product: Product
}

export function AddToCart(props: AddToCartProps) {
  const { product } = props

  const dispatch = useAppDispatch()

  function handleClick(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addProduct({ ...product, count: 1 }))
  }

  return (
    <button title="add to cart" className={styles.button} onClick={handleClick}>
      <AddToCartIcon className={styles.icon} />
    </button>
  )
}
