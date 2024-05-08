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
            flex-direction:column
            gap="0.5rem"
            width="100%"
            style={{ 'grid-column': props.column || 'initial', 'grid-row': props.row || 'initial' }}
        >
            <label font-weight:medium for={props.name}>
                {props.label}
            </label>
            <input
                border-grey-200
                height="3rem"
                width="100%"
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
