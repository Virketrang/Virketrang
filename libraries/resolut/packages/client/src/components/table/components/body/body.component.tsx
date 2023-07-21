const Body: Resolut.Table.Body.Component = memo(
    forwardRef(({ body, ...props }, forwardedRef) => {
        return (
            <tbody {...props} ref={forwardedRef}>
                {body.data
                    .slice(
                        (body.options?.pageSize || 10) * (body.options?.pageIndex || 1),
                        (body.options?.pageSize || 10) * ((body.options?.pageIndex || 1) + 1)
                    )
                    .map((entry: any) => (
                        <tr key={entry.id}>
                            {body.columns
                                .map((column) => column.accessor)
                                .map((accessor) => (
                                    <td key={entry.id + accessor}>{entry[accessor]}</td>
                                ))}
                        </tr>
                    ))}
            </tbody>
        )
    })
)

export default Body
