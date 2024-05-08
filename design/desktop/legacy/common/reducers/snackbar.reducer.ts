import { SnackbarAction, SnackbarState } from '../providers/snackbar.provider'

const SnackbarReducer = (state: SnackbarState, action: SnackbarAction): SnackbarState => {
    switch (action.type) {
        case 'ADD_ALERT':
            return {
                alerts: [...state.alerts, action.payload]
            }
        case 'DELETE_ALERT':
            return {
                alerts: state.alerts.filter((alert) => alert.id !== action.payload)
            }
    }
}

export default SnackbarReducer
