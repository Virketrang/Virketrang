import useSnackbarContext from './snackbar-context'

const useSnackbar = () => {
    const { dispatch } = useSnackbarContext()

    const snackbar = {
        success: (message: string, duration?: number) =>
            dispatch({
                type: 'ADD_ALERT',
                payload: { id: crypto.randomUUID(), severity: 'success', message, duration }
            }),
        warning: (message: string, duration?: number) =>
            dispatch({
                type: 'ADD_ALERT',
                payload: { id: crypto.randomUUID(), severity: 'warning', message, duration }
            }),
        error: (message: string, duration?: number) =>
            dispatch({
                type: 'ADD_ALERT',
                payload: { id: crypto.randomUUID(), severity: 'error', message, duration }
            }),
        info: (message: string, duration?: number) =>
            dispatch({ type: 'ADD_ALERT', payload: { id: crypto.randomUUID(), severity: 'info', message, duration } })
    }

    return snackbar
}

export default useSnackbar
