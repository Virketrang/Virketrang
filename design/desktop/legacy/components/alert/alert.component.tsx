import { component$ } from '@builder.io/qwik'
import { Severity } from '../../../src/types'
import styles from './alert.component.module.css'

type AlertProps = { severity?: Severity; children: string; id: string; duration?: number }

const Alert = component$(
    ({ className = '', severity = 'success', duration = 4000, children, id, ...props }, forwardedRef) => {
        const { dispatch } = useSnackbarContext()
        const timerID = useRef<NodeJS.Timeout>()

        useEffect(() => {
            timerID.current = setTimeout(() => dispatch({ type: 'DELETE_ALERT', payload: id }), duration)

            return () => clearTimeout(timerID.current)
        })

        const variables: any = { '--alert-duration': `${duration}ms` }

        return (
            <div
                class={`alert ${severity} ${styles.alert} ${class}`}
                role="alert"
                style={{ ...variables }}
                {...props}
                ref={forwardedRef}
            >
                <i class={styles.icon}>{severity === 'success' ? 'task_alt' : severity}</i>
                <span>{children}</span>
                <button class={styles.dismiss} onClick$={() => dispatch({ type: 'DELETE_ALERT', payload: id })}>
                    close
                </button>
            </div>
        )
    }
)

export default Alert
