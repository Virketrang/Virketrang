'use client'
import { NumberRange, Slider } from '@/liedecke-noergaard/components'
import { Currency } from '@/liedecke-noergaard/common'

import PriceRangeSelectorComponent from './price-range-selector.component.types'
import styles from './price-range-selector.component.module.scss'

const PriceRangeSelector: PriceRangeSelectorComponent = memo(({ currency, locale }) => {
    const [minValue, setMinValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('10000')

    useEffect(() => {
        setMinValue(Currency.numberToCurrency(0, currency, locale))
        setMaxValue(Currency.numberToCurrency(10000, currency, locale))
    }, [])

    return (
        <div className={styles.selector}>
            <h4 className={styles.title}>Pris</h4>
            <NumberRange
                locale={locale}
                currency={currency}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
            <Slider
                locale={locale}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
        </div>
    )
})

PriceRangeSelector.displayName = PriceRangeSelector.name

export default PriceRangeSelector
