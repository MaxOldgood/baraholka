import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { Input } from '../../shared/ui'
import { searchValueChanged } from '../../widgets/filters'

interface SearchProductsProps {
  disabled: boolean
}

export function SearchProducts(props: SearchProductsProps) {
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => state.filters.searchValue)

  const { disabled } = props

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
