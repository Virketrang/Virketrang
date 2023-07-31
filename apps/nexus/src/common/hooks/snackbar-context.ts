import { SnackbarContext } from '../contexts'

const useSnackbarContext = () => {
    const hook = useContext(SnackbarContext)

    if (!hook || !hook.state || !hook.dispatch) throw Error('SnackbarContext is not defined.')

    return { state: hook.state, dispatch: hook.dispatch }
}

export default useSnackbarContext
