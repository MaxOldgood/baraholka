import { useParams } from 'react-router-dom'
import styles from './details.module.scss'

export function Details() {
  const { productId: data } = useParams()
  console.log(data)
  return <div>{data}</div>
}
