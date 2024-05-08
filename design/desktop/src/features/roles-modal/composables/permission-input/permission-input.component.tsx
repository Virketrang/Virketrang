import { PermissionMenu } from './composables'
import { PermissionInputActions, PermissionInputSelection } from './components'

const PermissionInput = () => {
    const [open, setOpen] = createSignal(false)

    return (
        <div flex flex-direction:column gap="0.5rem" width="100%" position:relative overflow:visible>
            <label font-weight:medium>Tilladelser</label>
            <div flex border-grey-200 min-height="3rem" width="100%">
                <PermissionInputSelection />
                <PermissionInputActions setOpen={setOpen} />
            </div>
            <Show when={open()} fallback={null}>
                <PermissionMenu />
            </Show>
        </div>
    )
}

export default PermissionInput
