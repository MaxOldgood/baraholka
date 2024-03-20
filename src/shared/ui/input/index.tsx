import { ChangeEvent } from 'react'
import styles from './input.module.scss'

interface InputProps {
  type: string
  placeholder: string
  label: string
  id: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  value: string | number
}

export function Input(props: InputProps) {
  const { type, placeholder, label, id, onChange, disabled, value } = props
  return (
    <div className={`${styles.input__inner}`}>
      <label className={styles.input__label} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        disabled={disabled}
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
