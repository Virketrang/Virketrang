import { Currency } from '@/common'

import NumberRangeComponent from './number-range.component.types'
import styles from './number-range.component.module.scss'

const NumberRange: NumberRangeComponent = memo(({ minValue, maxValue, setMinValue, setMaxValue, currency, locale }) => {
    return (
        <div className={styles.range}>
            <input
                value={minValue}
                onChange={(event) => setMinValue(event.target.value)}
                onClick={() => setMinValue(Currency.currencyToNumber(minValue).toString())}
                onBlur={() => setMinValue(Currency.numberToCurrency(parseInt(minValue), currency, locale))}
                type="string"
                name="min-price"
                id="min-price"
            />
            <input
                value={maxValue}
                onChange={(event) => setMaxValue(event.target.value)}
                onClick={() => setMaxValue(Currency.currencyToNumber(maxValue).toString())}
                onBlur={() => setMaxValue(Currency.numberToCurrency(parseInt(maxValue), currency, locale))}
                type="string"
                name="max-price"
                id="max-price"
            />
        </div>
    )
})

NumberRange.displayName = NumberRange.name

export default NumberRange
