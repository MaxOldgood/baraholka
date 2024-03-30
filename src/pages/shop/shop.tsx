import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useGetAllProductsQuery } from '../../shared/api/api-slice'
import { Loader } from '../../shared/ui/loader'
import { Filters } from '../../widgets/filters'
import { hideFiltersMobile } from '../../widgets/filters/filters-slice'
import { ProductsList } from '../../widgets/products-list'
import { TopPanel } from '../../widgets/top-panel'
import styles from './shop.module.scss'
import { getFilteredProductsList } from './shopSlice'

export function Shop() {
  const { isSuccess, isLoading, isError } = useGetAllProductsQuery()
  const dispatch = useAppDispatch()
  const filteredProducts = useAppSelector((state) => getFilteredProductsList(state))
  const filtersOpen = useAppSelector((state) => state.filters.visibleMobile)

  function hideFilters() {
    dispatch(hideFiltersMobile())
  }

  window.addEventListener('resize', () => {
    const overlay = document.getElementById('#overlay')
    let vh = window.innerHeight * 0.01
    overlay?.style.setProperty('--vh', `${vh}px`)
  })

  return (
    <div className={`${styles.shop} container`}>
      <Filters
        disabled={!isSuccess}
        className={!filtersOpen ? 'hidden-mobile' : 'container'}
        onCloseButtonClick={hideFilters}
      />
      <div className={styles.shop__content}>
        <TopPanel disabled={!isSuccess} productsNumber={filteredProducts?.length} />

        {isLoading && <Loader className={styles.shop__loader} />}
        {isError && <p className={styles.shop__not_found}>something went wrong </p>}
        {isSuccess && filteredProducts?.length === 0 && (
          <p className={styles.shop__not_found}>no products matching filters </p>
        )}

        {isSuccess && filteredProducts && <ProductsList products={filteredProducts} />}
      </div>
      <div
        id="overlay"
        className={`${styles.overlay} visible-mobile ${!filtersOpen && 'visually-hidden'}`}
        onClick={hideFilters}
      ></div>
    </div>
  )
}
