import { ChangeEvent } from 'react'
import styles from './checkbox.module.scss'

interface CheckboxProps {
  label: string
  id?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  checked?: boolean
}

export function Checkbox(props: CheckboxProps) {
  const { label, id, onChange, disabled, checked } = props
  return (
    <div className={`${styles.checkbox__inner}`}>
      <input
        disabled={disabled}
        type="checkbox"
        checked={checked}
        id={id}
        className={styles.checkbox}
        onChange={onChange}
        value={label}
      />
      <label className={styles.checkbox__label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
