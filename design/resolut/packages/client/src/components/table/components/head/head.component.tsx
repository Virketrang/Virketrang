const Head: Resolut.Table.Head.Component = memo(
    forwardRef(({ head, ...props }, forwardedRef) => {
        return (
            <thead {...props} ref={forwardedRef}>
                <tr>{head && head.map((entry) => <th key={crypto.randomUUID()}>{entry}</th>)}</tr>
            </thead>
        )
    })
)

export default Head
