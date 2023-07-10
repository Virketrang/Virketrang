'use client'
import { StoreAction, StoreState } from '../providers/store.provider'

type Store = {
    state: StoreState
    dispatch: React.Dispatch<StoreAction>
} | null

const StoreContext = createContext<Store>(null)

export default StoreContext
