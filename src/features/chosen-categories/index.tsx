import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Categories, useGetAllCategotiesQuery } from '../../shared/api/products-slice'
import { Checkbox } from '../../shared/ui/checkbox'
import { Skeleton } from '../../shared/ui/skeleton'
import { selectedCategoriesChanged } from '../../widgets/filters/filters-slice'
import styles from './chosen-categories.module.scss'

interface ChosenCategoriesProps {
  disabled: boolean
}

export function ChosenCategories(props: ChosenCategoriesProps) {
  const { disabled } = props
  const { data: categories, isLoading, isSuccess } = useGetAllCategotiesQuery()
  const dispatch = useAppDispatch()

  const selectedCategories = useAppSelector((state) => state.filters.selectedCategories)
  const badge = selectedCategories?.length > 0 ? selectedCategories.length : null
  function handleChosenCategoriesChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    dispatch(selectedCategoriesChanged(value))
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Categories <span className={badge && styles.title__badge}>{badge}</span>
        {selectedCategories?.length === 0 && <span className={styles.title__hint}>not selected</span>}
      </p>
      <ul className={styles.categories_list}>
        {isLoading && <Skeleton />}
        {isSuccess &&
          categories.map((category) => {
            const checked = selectedCategories.includes(category)
            return (
              <Checkbox
                checked={checked}
                disabled={disabled}
                key={category}
                label={category}
                id={category}
                onChange={handleChosenCategoriesChange}
              />
            )
          })}
      </ul>
    </div>
  )
}
