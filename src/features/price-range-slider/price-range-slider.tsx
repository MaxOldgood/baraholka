import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Input } from '../../shared/ui/input'
import { allFiltersChanged, maxPriceChanged, minPriceChanged } from '../../widgets/filters/filters-slice'
import styles from './price-range-slider.module.scss'

export function PriceRangeSlider({ step, min, max, disabled }) {
  const minPrice = useAppSelector((state) => state.filters.minPrice)
  const maxPrice = useAppSelector((state) => state.filters.maxPrice)
  const dispatch = useAppDispatch()

  function handleMinChange(event) {
    const value = parseFloat(event.target.value)
    const newMinValue = Math.min(value, maxPrice - step)
    dispatch(minPriceChanged(newMinValue))
  }

  function handleMaxChange(event) {
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
