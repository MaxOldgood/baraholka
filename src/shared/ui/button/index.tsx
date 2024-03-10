import styles from './button.module.scss'

interface ButtonProps {
  text: string
  className: string
  onClick: () => void
}

export function Button(props: ButtonProps) {
  const { text, className, onClick } = props
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}
