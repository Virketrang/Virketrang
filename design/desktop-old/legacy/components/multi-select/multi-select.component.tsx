import styles from './multi-select.component.module.css'
import MultiSelectComponent from './multi-select.component.types'

const MultiSelect: MultiSelectComponent = memo(({ options, selected, selectedChanged, ...props }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen((prev) => !prev)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === true && !selected.includes(event.target.value))
            return selectedChanged([...selected, event.target.value])

        if (event.target.checked === false && selected.includes(event.target.value))
            return selectedChanged(selected.filter((entry) => entry !== event.target.value))
    }

    return (
        <div {...props} data-open={open} role="combobox" className={styles.select}>
            <span onClick={handleClick}>{selected.length} valgte</span>
            <ul>
                {options.map((option) => (
                    <li key={option.value}>
                        <span>{option.label}</span>
                        <input onChange={handleChange} type="checkbox" value={option.value} />
                    </li>
                ))}
            </ul>
        </div>
    )
})

MultiSelect.displayName = MultiSelect.name

export default MultiSelect
