import { DATA } from './data'
import styles from './index.module.scss'

interface MenuProps {
  className: string
}

export function Menu(props: MenuProps) {
  const { className } = props
  return (
    <nav className={`${styles.menu}  ${className} hidden-mobile`}>
      <ul className={styles.menu__list}>
        {DATA.map((item) => {
          return (
            <li className={`${styles.menu__item}`} key={item}>
              <a className={`${styles.menu__link}`} href="/online-eshop/">
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
