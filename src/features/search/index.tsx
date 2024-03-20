import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Input } from '../../shared/ui/input'
import { searchValueChanged } from '../../widgets/filters/filters-slice'
import styles from './search.module.scss'

interface SearchProps {
  disabled: boolean
}

export function Search(props: SearchProps) {
  const { disabled } = props
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => state.filters.searchValue)

  function handleSearchValueChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(searchValueChanged(e.target.value))
  }
  return (
    <Input
      value={value}
      disabled={disabled}
      type="text"
      label="Search"
      placeholder="Find something!"
      id="search"
      onChange={handleSearchValueChange}
    />
  )
}
