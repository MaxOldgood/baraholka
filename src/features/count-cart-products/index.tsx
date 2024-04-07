import { MouseEvent } from 'react'
import { decrementCount, deleteProduct, incrementCount } from '../../entities/cart'
import { CartProduct } from '../../entities/product'
import { useAppDispatch } from '../../shared/hooks'
import styles from './count-cart-products.module.scss'

interface CountCardProductsProps {
  product: CartProduct
  deleteIfZero?: boolean
  className?: string
}

export function CountCardProducts(props: CountCardProductsProps) {
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
