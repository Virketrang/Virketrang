import { SnackbarAction, SnackbarState } from '../providers/snackbar.provider'

type SnackbarContextType = {
    state: SnackbarState
    dispatch: React.Dispatch<SnackbarAction>
} | null

const SnackbarContext = createContext<SnackbarContextType>(null)

export default SnackbarContext
