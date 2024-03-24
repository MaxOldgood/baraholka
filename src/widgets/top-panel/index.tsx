import { useAppDispatch } from '../../app/hooks'
import { Sort } from '../../features/sort'
import { Button } from '../../shared/ui/button'
import { showFiltersMobile } from '../filters/filters-slice'
import styles from './top-panel.module.scss'

interface TopPanelProps {
  disabled: boolean
  productsNumber: number | undefined
}

export function TopPanel(props: TopPanelProps) {
  const { disabled, productsNumber } = props

  const dispatch = useAppDispatch()

  function showFilters() {
    dispatch(showFiltersMobile())
  }

  return (
    <div className={styles.top_panel}>
      <Button text="Filters" className={`${styles.filters_button} visible-mobile`} onClick={showFilters} />
      {productsNumber && <p className={`${styles.products_number} hidden-mobile`}>Found {productsNumber} products</p>}
      <Sort disabled={disabled} />
    </div>
  )
}
