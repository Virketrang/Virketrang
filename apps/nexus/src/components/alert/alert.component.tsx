import { useSnackbarContext } from '@/common'

import AlertComponent from './alert.component.types'
import styles from './alert.component.module.css'

const Alert: AlertComponent = memo(
    forwardRef(({ className = '', severity = 'success', duration = 4000, children, id, ...props }, forwardedRef) => {
        const { dispatch } = useSnackbarContext()
        const timerID = useRef<number>()

        useEffect(() => {
            timerID.current = setTimeout(() => dispatch({ type: 'DELETE_ALERT', payload: id }), duration)

            return () => clearTimeout(timerID.current)
        })

        const variables: any = { '--alert-duration': `${duration}ms` }

        return (
            <div
                className={`alert ${severity} ${styles.alert} ${className}`}
                role="alert"
                style={{ ...variables }}
                {...props}
                ref={forwardedRef}
            >
                <i className={styles.icon}>{severity === 'success' ? 'task_alt' : severity}</i>
                <span>{children}</span>
                <button className={styles.dismiss} onClick={() => dispatch({ type: 'DELETE_ALERT', payload: id })}>
                    close
                </button>
            </div>
        )
    })
)

export default Alert
