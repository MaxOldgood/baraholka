import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { maxPriceChanged, minPriceChanged } from '../../widgets/filters/filters-slice'
import styles from './price-range-slider.module.scss'

interface PriceRangeSliderProps {
  step: number
  min: number
  max: number
  disabled: boolean
}

export function PriceRangeSlider({ step, min, max, disabled }: PriceRangeSliderProps) {
  const minPrice = useAppSelector((state) => state.filters.minPrice)
  const maxPrice = useAppSelector((state) => state.filters.maxPrice)
  const dispatch = useAppDispatch()

  function handleMinChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value)
    const newMinValue = Math.min(value, maxPrice - step)
    dispatch(minPriceChanged(newMinValue))
  }

  function handleMaxChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value)
    const newMaxValue = Math.max(value, minPrice + step)
    dispatch(maxPriceChanged(newMaxValue))
  }

  const minPos = ((minPrice - min) / (max - min)) * 100
  const maxPos = ((maxPrice - min) / (max - min)) * 100

  return (
    <div className={styles['wrapper']}>
      <p className={styles.title}>Price</p>
      <div className={styles['slider']}>
        <div className={styles['progress']} style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}></div>
      </div>

      <div className={styles['range-input']}>
        <input
          disabled={disabled}
          type="range"
          className={styles['range-min']}
          min={min}
          max={max}
          value={minPrice}
          step={step}
          onChange={handleMinChange}
        />
        <input
          disabled={disabled}
          type="range"
          className={styles['range-max']}
          min={min}
          max={max}
          value={maxPrice}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className={styles['price']}>
        <div className={styles['price-min']}>{`$${minPrice}`}</div>
        <div className={styles['price-max']}>{`$${maxPrice}`}</div>
      </div>
    </div>
  )
}
