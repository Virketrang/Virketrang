import { createContext, Dispatch } from 'react'
import { StoreAction, StoreState } from '../provider/store.provider'

type Store = {
    state: StoreState
    dispatch: Dispatch<StoreAction>
} | null

const StoreContext = createContext<Store>(null)

export default StoreContext
