import { MouseEvent } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { decrementCount, deleteProduct, incrementCount } from '../../entities/cart/model/cart-slice'
import { type CartProduct } from '../../entities/product/model/types'
import styles from './cart-product-counter.module.scss'

interface CartProductCounterProps {
  product: CartProduct
  deleteIfZero?: boolean
  className?: string
}

export function CartProductCounter(props: CartProductCounterProps) {
  const { className, product, deleteIfZero = false } = props
  const { count } = product

  const dispatch = useAppDispatch()

  function handleDivClick(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  function handleIncrementButtonClick() {
    dispatch(incrementCount(product.id))
  }

  function handleDecrementButtonClick() {
    dispatch(decrementCount(product.id))
  }

  function deleteFromCartIfZero() {
    if (count === 0) {
      dispatch(deleteProduct(product.id))
    }
  }

  deleteIfZero && deleteFromCartIfZero()

  return (
    <div className={`${styles.counter} ${className}`} onClick={handleDivClick}>
      <button disabled={count === 0} className={styles.counter__button} onClick={handleDecrementButtonClick}>
        -
      </button>
      <span className={styles.counter__number}>{count}</span>
      <button className={styles.counter__button} onClick={handleIncrementButtonClick}>
        +
      </button>
    </div>
  )
}
