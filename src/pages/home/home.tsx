import { ProductsList } from '../../widgets/products-list'
import styles from './home.module.scss'

export function Home() {
  return (
    <div className={`${styles.home} container`}>
      <ProductsList />
    </div>
  )
}
