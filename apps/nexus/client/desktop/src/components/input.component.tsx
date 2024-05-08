const Input = (props: {
    type?: string
    column?: string
    row?: string
    name: string
    label: string
    value?: string
    onInput?: React.FormEventHandler<HTMLInputElement>
}) => {
    return (
        <div
            className="flex flex-col gap-2 w-full"
            style={{ gridColumn: props.column || 'initial', gridRow: props.row || 'initial' }}
        >
            <label className="font-medium" htmlFor={props.name}>
                {props.label}
            </label>
            <input
                className="height-12 w-full border-gray-200"
                type={props.type || 'text'}
                id={props.name}
                name={props.name}
                value={props.value || ''}
                onInput={props.onInput || (() => null)}
            />
        </div>
    )
}

export default Input
