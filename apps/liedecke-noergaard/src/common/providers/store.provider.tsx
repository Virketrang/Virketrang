'use client'
import { StoreContext, StoreReducer } from '@/common'

type StoreProviderComponent = FunctionComponent<{ children: ReactNode }>

export interface Product {
    id: string
    price: number
    quantity: number
    name: string
    materials: string
    image: { src: string; alt: string }
}

export type StoreState = { shoppingCart: { products: Product[]; open: boolean }; sidebar: boolean }

export const enum StoreActionType {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    DECREASE = 'DECREASE',
    INCREASE = 'INCREASE',
    OPEN_SHOPPING_CART = 'OPEN_SHOPPING_CART',
    CLOSE_SHOPPING_CART = 'CLOSE_SHOPPING_CART',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
}

export type StoreAction =
    | { type: 'OPEN_SHOPPING_CART' | 'CLOSE_SHOPPING_CART' | 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR' }
    | { type: 'ADD'; payload: Product }
    | { type: 'REMOVE' | 'INCREASE' | 'DECREASE'; payload: string }

const initialState = { shoppingCart: { products: [], open: false }, sidebar: false }

const StoreProvider: StoreProviderComponent = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState)

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export default StoreProvider
