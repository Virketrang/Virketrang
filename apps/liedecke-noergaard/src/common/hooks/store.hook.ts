import { StoreContext } from '@/common'

const useStore = () => {
    const hook = useContext(StoreContext)

    if (!hook || !hook.state || !hook.dispatch) throw Error('StoreContext is not defined.')

    return { state: hook.state, dispatch: hook.dispatch }
}

export default useStore
