import { ChangeEvent } from 'react'
import Arrow from '../../shared/assets/icons/arrow.svg?react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { Select } from '../../shared/ui'
import styles from './sort-products.module.scss'
import { sortByChanged, sortByOptions, sortDirectionChanged } from './sort-slice'

interface SortProductsProps {
  disabled: boolean
}

export function SortProducts(props: SortProductsProps) {
  const { disabled } = props

  const dispatch = useAppDispatch()
  const sortBy = useAppSelector((state) => state.sort.sortBy)
  const ascendent = useAppSelector((state) => state.sort.ascendent)

  const sortOptions = Object.values(sortByOptions)

  function handleSortByOptionChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(sortByChanged(e.target.value))
  }

  function handleDirectionArrowClick() {
    dispatch(sortDirectionChanged())
  }

  return (
    <div className={styles.sort}>
      <Select
        disabled={disabled}
        options={sortOptions}
        name="sortOptions"
        defaultValue={sortBy}
        label={'sort by'}
        onChange={handleSortByOptionChange}
      />
      <button className={styles.sort__icon_button} onClick={handleDirectionArrowClick} disabled={disabled}>
        <Arrow className={`${styles.sort__arrow} ${!ascendent && styles[`sort__arrow_down`]}`} />
      </button>
    </div>
  )
}
