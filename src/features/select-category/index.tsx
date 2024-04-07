import { ChangeEvent } from 'react'
import { useGetAllCategotiesQuery } from '../../shared/api/api-slice'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { Checkbox } from '../../shared/ui/'
import { selectedCategoriesChanged } from '../../widgets/filters/'
import styles from './select-category.module.scss'

interface ChosenCategoriesProps {
  disabled: boolean
}

export function SelectCategory(props: ChosenCategoriesProps) {
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
        {isLoading && <Checkbox checked={false} disabled={true} label={'loading...'} />}
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
