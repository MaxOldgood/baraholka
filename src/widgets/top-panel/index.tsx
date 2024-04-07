import { SortProducts } from '../../features'
import { useAppDispatch } from '../../shared/hooks'
import { Button } from '../../shared/ui'
import { showFiltersMobile } from '../filters'
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
      {<p className={`${styles.products_number} hidden-mobile`}>Found {productsNumber} products</p>}
      <SortProducts disabled={disabled} />
    </div>
  )
}
