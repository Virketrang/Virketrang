import { useSnackbarContext } from '@/common'

import SnackbarComponent from './snackbar.component.types'
import styles from './snackbar.component.module.css'
import Alert from '../alert/alert.component'

const Snackbar: SnackbarComponent = memo(
    forwardRef(({ className = '', placement = 'bottom-left', offset = 1, style, children, ...props }, forwardedRef) => {
        const { state } = useSnackbarContext()

        const variables: any = { '--snackbar-offset': `${offset}rem` }

        return (
            <div
                className={`snackbar ${styles.snackbar} ${styles[placement.split('-')[0]]} ${
                    styles[placement.split('-')[1]]
                } ${className}`}
                style={{ ...variables }}
                ref={forwardedRef}
                role="alert"
                id="snackbar"
                {...props}
            >
                {state.alerts &&
                    state.alerts.map((alert) => (
                        <Alert key={alert.id} id={alert.id} severity={alert.severity} duration={alert.duration}>
                            {alert.message}
                        </Alert>
                    ))}
            </div>
        )
    })
)

export default Snackbar
