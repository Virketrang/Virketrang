const Input = (props: {
    type?: string
    column?: string
    row?: string
    name: string
    label: string
    value?: string
    onInput?: (e: Event) => void
}) => {
    return (
        <div
            flex
            flex-column
            gap-05
            w-full
            style={{ 'grid-column': props.column || 'initial', 'grid-row': props.row || 'initial' }}
        >
            <label for={props.name}>{props.label}</label>
            <input
                border-grey-200
                h-3
                w-full
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
