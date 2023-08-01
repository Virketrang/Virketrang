'use client'
import { useStore } from '@/liedecke-noergaard/common'
import { ShoppingBag } from '@/liedecke-noergaard/assets'

import CartButtonComponent from './cart-button.types'
import styles from './cart-button.module.scss'

const CartButton: CartButtonComponent = memo(({ ...props }) => {
    const { state, dispatch } = useStore()

    const handleClick = () => {
        dispatch({ type: 'OPEN_SHOPPING_CART' })
    }

    const sum = () => state.shoppingCart.products.reduce((currentValue, product) => product.quantity + currentValue, 0)

    return (
        <button className={`${styles.bag} ${sum() !== 0 ? styles.notEmpty : ''}`} data-product-count={sum()}>
            <ShoppingBag role="button" onClick={handleClick} />
        </button>
    )
})

CartButton.displayName = 'CartButton'

export default CartButton
