import { MouseEvent } from 'react'
import { addProduct } from '../../entities/cart'
import { Product } from '../../entities/product'
import AddToCartIcon from '../../shared/assets/icons/add-to-cart.svg?react'
import { useAppDispatch } from '../../shared/hooks'
import { Button } from '../../shared/ui/button'
import styles from './add-to-cart.module.scss'

interface AddToCartProps {
  product: Product
  variant?: 'icon' | 'text'
}

export function AddToCart(props: AddToCartProps) {
  const { product, variant = 'icon' } = props
  const dispatch = useAppDispatch()

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addProduct({ ...product, count: 1 }))
  }

  if (variant === 'icon') {
    return (
      <button title="add to cart" className={styles.button} onClick={handleClick}>
        <AddToCartIcon className={styles.icon} />
      </button>
    )
  } else return <Button text="add to cart" onClick={handleClick} />
}
