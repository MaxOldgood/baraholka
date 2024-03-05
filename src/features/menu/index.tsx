import { DATA } from './data'
import styles from './index.module.scss'

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {DATA.map((item) => {
          return (
            <li className={styles.menu__item} key={item}>
              <a className={styles.menu__link} href={'/'}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
