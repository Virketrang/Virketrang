import styles from './stepper.component.module.css'

const Stepper = ({ steps, step }: { steps: number; step: number }) => {
    return (
        <div class={styles.stepper} role="progressbar">
            {[...Array(steps)].map((_, index) => (
                <div>
                    <span
                        class={`${styles.step} ${index + 1 === step ? styles.current : ''} ${
                            index + 1 < step ? styles.completed : ''
                        }`}
                    >
                        {index + 1}
                    </span>
                    {index + 1 < steps && (
                        <span class={`${styles.line} ${index + 1 < step ? styles.completed : ''}`}></span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Stepper
