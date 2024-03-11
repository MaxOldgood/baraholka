import styles from './loader.module.scss'

interface LoaderProps {
  className: string
}

export function Loader(props: LoaderProps) {
  const { className } = props
  return <div className={`${styles.loader} ${className}`}></div>
}
