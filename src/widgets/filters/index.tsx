import { ChosenCategories } from '../../features/chosen-categories'
import { PriceRangeSlider } from '../../features/price-range-slider/price-range-slider'
import { ResetFilters } from '../../features/reset-filters'
import { Search } from '../../features/search'
import styles from './filters.module.scss'

interface FiltersProps {
  disabled: boolean
}

export function Filters(props: FiltersProps) {
  const { disabled } = props

  return (
    <aside className={styles.filters}>
      <div className={`${styles.filters__inner} ${disabled && styles.filters__disabled}`}>
        <div className={styles.filters__header}>
          <p className={styles.filters__header_title}>Filters</p>
          <ResetFilters />
        </div>
        <Search disabled={disabled} />
        <ChosenCategories disabled={disabled} />
        <PriceRangeSlider min={0} max={2000} step={10} disabled={disabled} />
      </div>
    </aside>
  )
}
