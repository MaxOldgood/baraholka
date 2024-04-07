import { useGetAllProductsQuery } from '../../shared/api/api-slice'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { Loader } from '../../shared/ui'
import { ProductsList, TopPanel } from '../../widgets'
import { Filters, hideFiltersMobile } from '../../widgets/filters'
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
