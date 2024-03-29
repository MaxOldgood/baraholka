import styles from './loader.module.scss'

interface LoaderProps {
  className?: string
}

export function Loader(props: LoaderProps) {
  const { className } = props
  return <span className={`${styles.loader} ${className}`}></span>
}
