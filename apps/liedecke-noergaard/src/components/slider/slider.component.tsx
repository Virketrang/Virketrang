'use client'
import { Currency } from '@/common'

import SliderComponent from './slider.component.types'
import styles from './slider.component.module.scss'

const Slider: SliderComponent = memo(({ minValue, maxValue, setMinValue, setMaxValue, locale }) => {
    const [minNumericValue, setMinNumericValue] = useState(0)
    const [maxNumericValue, setMaxNumericValue] = useState(10000)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.name === 'min-range') {
            if (parseInt(target.value) > Currency.currencyToNumber(maxValue)) return
            setMinValue(Currency.numberToCurrency(parseInt(target.value), 'DKK', locale))
        }
        if (target.name === 'max-range') {
            if (parseInt(target.value) < Currency.currencyToNumber(minValue)) return
            setMaxValue(Currency.numberToCurrency(parseInt(target.value), 'DKK', locale))
        }
    }

    useEffect(() => {
        setMinNumericValue(Currency.currencyToNumber(minValue))
    }, [minValue])

    useEffect(() => {
        setMaxNumericValue(Currency.currencyToNumber(maxValue))
    }, [maxValue])

    return (
        <div className={styles.control}>
            <input
                id="min-range"
                name="min-range"
                type="range"
                min={0}
                max={10000}
                value={minNumericValue}
                onChange={handleChange}
                className={styles.slider}
            />
            <input
                id="max-range"
                name="max-range"
                type="range"
                min={0}
                max={10000}
                value={maxNumericValue}
                onChange={handleChange}
                className={styles.slider}
            />
        </div>
    )
})

Slider.displayName = Slider.name

export default Slider
