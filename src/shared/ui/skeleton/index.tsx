import { Checkbox } from '../checkbox'
import styles from './skeleton.module.scss'

export function Skeleton() {
  return Array(4).fill(<Checkbox disabled={true} label="loading..." />)
}
