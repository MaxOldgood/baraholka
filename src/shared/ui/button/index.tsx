import styles from './button.module.scss'

interface ButtonProps {
  text: string
  className: string
  onClick: () => void
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { text, className, onClick, disabled } = props
  return (
    <button
      className={`${styles.button} ${className} ${disabled && styles.disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
