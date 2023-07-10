import styles from './option.component.module.scss'
import OptionComponent from './option.component.types'

const Option: OptionComponent = memo(({ value }) => {
    return (
        <li className={styles.option}>
            <input type="checkbox" name={value} id={value} />
            <label htmlFor={value}>{value}</label>
        </li>
    )
})

Option.displayName = Option.name

export default Option
