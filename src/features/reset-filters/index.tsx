import { useAppDispatch } from '../../shared/hooks'
import { Button } from '../../shared/ui/button'
import { resetFilters } from '../../widgets/filters'
import styles from './reset-filters.module.scss'

export function ResetFilters() {
  const dispatch = useAppDispatch()

  function handleResetButtonClick() {
    dispatch(resetFilters())
  }

  return <Button className={styles.button} text="reset" onClick={handleResetButtonClick} />
}
