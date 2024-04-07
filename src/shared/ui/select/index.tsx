import { ChangeEvent } from 'react'
import { type sortBy } from '../../../features/sort-products/sort-slice'
import styles from './select.module.scss'

interface SelectProps {
  options: sortBy[]
  name: string
  defaultValue: sortBy
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  label?: string
}

export function Select(props: SelectProps) {
  const { options, name, defaultValue, onChange, label, disabled } = props
  return (
    <div className={styles.select}>
      <label htmlFor={name} className={styles.select__label}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={`${styles.select__body} `}
      >
        {options?.map((option) => {
          return (
            <option key={option} value={option} className={styles.select__body_option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}
