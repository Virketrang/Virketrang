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
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
}) => {
    return (
        <div style={{ gridColumn: column, gridRow: row }} className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <select
                value={value || defaultValue}
                id={name}
                name={name}
                onChange={onChange}
                className="border-gray-200 w-full height-12"
            >
                {children}
            </select>
        </div>
    )
}

export default Select
