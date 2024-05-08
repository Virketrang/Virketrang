import { JSX } from 'solid-js'

const Select = ({
    column,
    row,
    name,
    children,
    label,
    value,
    defaultValue,
    onChange = () => null
}: {
    column: string
    row: string
    name: string
    label: string
    children: JSX.Element
    value?: string
    defaultValue?: string
    onChange?: (event: Event) => void
}) => {
    return (
        <div flex flex-direction:column gap="0.5rem" style={{ 'grid-column': column, 'grid-row': row }}>
            <label for={name}>{label}</label>
            <select
                value={value || defaultValue}
                border-grey-200
                height="3rem"
                width="100%"
                id={name}
                name={name}
                onChange={onChange}
            >
                {children}
            </select>
        </div>
    )
}

export default Select
