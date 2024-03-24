import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Arrow from '../../shared/assets/icons/arrow.svg?react'
import { Select } from '../../shared/ui/select'
import { sortByChanged, sortByOptions, sortDirectionChanged } from './sort-slice'
import styles from './sort.module.scss'

interface SortProps {
  disabled: boolean
}

export function Sort(props: SortProps) {
  const { disabled } = props
  const sortBy = useAppSelector((state) => state.sort.sortBy)
  const ascendent = useAppSelector((state) => state.sort.ascendent)
  const dispatch = useAppDispatch()

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
