import { ChosenCategories } from '../../features/chosen-categories'
import { PriceRangeSlider } from '../../features/price-range-slider/price-range-slider'
import { ResetFilters } from '../../features/reset-filters'
import { Search } from '../../features/search'
import { Button } from '../../shared/ui/button'
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
        <Search disabled={disabled} />
        <ChosenCategories disabled={disabled} />
        <PriceRangeSlider min={0} max={2000} step={10} disabled={disabled} />
      </div>
    </aside>
  )
}
