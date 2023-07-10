'use client'
import { useStore } from '@/common'
import { Minus, Plus } from '@/assets'

import styles from './quantity-indicator.module.scss'
import QuantityIndicatorComponent from './quantity-indicator.types'

const QuantityIndicator: QuantityIndicatorComponent = memo(({ id, quantity, dictionary }) => {
    const { dispatch } = useStore()

    const increment = () => dispatch({ type: 'INCREASE', payload: id })

    const decrement = () => dispatch({ type: 'DECREASE', payload: id })

    return (
        <div className={styles.indicator}>
            <button className={styles.adjust} onClick={decrement}>
                <Minus />
            </button>
            <span>
                {quantity} {dictionary.pieces}
            </span>
            <button className={styles.adjust} onClick={increment}>
                <Plus />
            </button>
        </div>
    )
})

QuantityIndicator.displayName = 'QuantityIndicator'

export default QuantityIndicator
