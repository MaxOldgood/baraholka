import { ChangePriceRange, ResetFilters, SearchProducts, SelectCategory } from '../../../features/'
import { Button } from '../../../shared/ui'
import styles from './filters.module.scss'

interface FiltersProps {
  disabled: boolean
  className?: string
  onCloseButtonClick: () => void
}

export function Filters(props: FiltersProps) {
  const { disabled, className, onCloseButtonClick } = props

  return (
    <aside className={`${styles.filters} ${className}`}>
      <div className={`${styles.filters__inner} ${disabled && styles.filters__disabled}`}>
        <div className={styles.filters__header}>
          <p className={styles.filters__header_title}>Filters</p>
          <ResetFilters />
          <Button className={`${styles.close_button} visible-mobile`} text="X" onClick={onCloseButtonClick} />
        </div>
        <SearchProducts disabled={disabled} />
        <SelectCategory disabled={disabled} />
        <ChangePriceRange min={0} max={2000} step={10} disabled={disabled} />
      </div>
    </aside>
  )
}
