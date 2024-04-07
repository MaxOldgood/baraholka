import styles from './cart-total.module.scss'

interface CartTotalStringProps {
  text: string
  sum: string
}

export function CartTotalString(props: CartTotalStringProps) {
  const { text, sum } = props

  return (
    <div className={styles.string}>
      <p className={styles.string__text}>{text}</p>
      <p className={styles.string__sum}>${sum}</p>
    </div>
  )
}
