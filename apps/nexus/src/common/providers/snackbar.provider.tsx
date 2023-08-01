import { SnackbarContext, SnackbarReducer } from '@/nexus/common'
import { Severity } from '@/nexus/types'

export type SnackbarAlert = { id: string; message: string; severity: Severity; duration?: number }
export type SnackbarAction = { type: 'ADD_ALERT'; payload: SnackbarAlert } | { type: 'DELETE_ALERT'; payload: string }
export type SnackbarState = { alerts: SnackbarAlert[] }

const initialState: SnackbarState = {
    alerts: []
}

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(SnackbarReducer, initialState)

    return <SnackbarContext.Provider value={{ state, dispatch }}>{children}</SnackbarContext.Provider>
}

export default SnackbarProvider
