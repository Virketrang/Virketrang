import { StoreAction, StoreState } from '../providers/store.provider'
import { Store } from '@/common'

const StoreReducer = (state: StoreState, action: StoreAction): StoreState => {
    switch (action.type) {
        case 'ADD':
            return {
                shoppingCart: {
                    products: Store.addProduct(state.shoppingCart.products, action.payload),
                    open: state.shoppingCart.open
                },
                sidebar: state.sidebar
            }

        case 'REMOVE':
            return {
                shoppingCart: {
                    products: Store.removeProduct(state.shoppingCart.products, action.payload),
                    open: state.shoppingCart.open
                },
                sidebar: state.sidebar
            }

        case 'INCREASE':
            return {
                shoppingCart: {
                    products: Store.increment(state.shoppingCart.products, action.payload),
                    open: state.shoppingCart.open
                },
                sidebar: state.sidebar
            }

        case 'DECREASE':
            return {
                shoppingCart: {
                    products: Store.decrement(state.shoppingCart.products, action.payload),
                    open: state.shoppingCart.open
                },
                sidebar: state.sidebar
            }

        case 'OPEN_SHOPPING_CART': {
            return { shoppingCart: { products: state.shoppingCart.products, open: true }, sidebar: state.sidebar }
        }
        case 'CLOSE_SHOPPING_CART': {
            return { shoppingCart: { products: state.shoppingCart.products, open: false }, sidebar: state.sidebar }
        }
        case 'OPEN_SIDEBAR': {
            return {
                shoppingCart: { products: state.shoppingCart.products, open: state.shoppingCart.open },
                sidebar: true
            }
        }
        case 'CLOSE_SIDEBAR': {
            return {
                shoppingCart: { products: state.shoppingCart.products, open: state.shoppingCart.open },
                sidebar: false
            }
        }
        default:
            throw Error('unknown StoreActionType was provided.')
    }
}

export default StoreReducer
