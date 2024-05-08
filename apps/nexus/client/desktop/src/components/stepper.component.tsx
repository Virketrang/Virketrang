import styles from './stepper.component.module.css'

const Stepper = ({ steps, step }: { steps: number; step: number }) => {
    return (
        <div className="w-full flex justify-between items-center gap-4" role="progressbar">
            {[...Array(steps)].map((_, index) => (
                <div>
                    <span
                        className={`shadow w-6 h-6 flex-shrink-0 text-xs rounded-[50%] grid place-items-center text-secondary font-medium ${index + 1 === step ? 'bg-secondary' : ''} ${
                            index + 1 < step ? styles.completed : ''
                        }`}
                    >
                        {index + 1}
                    </span>
                    {index + 1 < steps && (
                        <span className={`w-full height-[1px] shadow ${index + 1 < step ? 'bg-[#29d071]' : ''}`}></span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Stepper
