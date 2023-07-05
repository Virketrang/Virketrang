import ButtonComponent from './button.component.types'
import styles from './button.component.module.css'

const Button: ButtonComponent = memo(({ color = 'primary', ...props }) => {
    return <button className={`${styles.button} ${styles[color]}`} {...props} />
})

Button.displayName = Button.name

export default Button
