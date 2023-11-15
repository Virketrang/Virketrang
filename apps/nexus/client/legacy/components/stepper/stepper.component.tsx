import StepperComponent from './stepper.component.types'
import styles from './stepper.component.module.css'

const Stepper: StepperComponent = memo(({ steps, step }) => {
    return (
        <div className={styles.stepper} role="progressbar">
            {[...Array(steps)].map((_, index) => (
                <Fragment key={index}>
                    <span
                        className={`${styles.step} ${index + 1 === step ? styles.current : ''} ${
                            index + 1 < step ? styles.completed : ''
                        }`}
                        key={`${index}-dot`}
                    >
                        {index + 1}
                    </span>
                    {index + 1 < steps && (
                        <span
                            key={`${index}-line`}
                            className={`${styles.line} ${index + 1 < step ? styles.completed : ''}`}
                        ></span>
                    )}
                </Fragment>
            ))}
        </div>
    )
})

Stepper.displayName = Stepper.name

export default Stepper
