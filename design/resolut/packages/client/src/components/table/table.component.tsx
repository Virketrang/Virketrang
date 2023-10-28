import { Head, Body } from './components'
import { useTable } from './hooks'

const Component: Resolut.Table.Component = memo(
    forwardRef(({ pagination, ...props }, forwardedRef) => {
        return <table {...props} ref={forwardedRef} />
    })
)

const Table: Resolut.Table.Component & {
    Head: Resolut.Table.Head.Component
    Body: Resolut.Table.Body.Component
    useTable: typeof useTable
} = Object.assign(Component, {
    Head,
    Body,
    useTable
})

export default Table
