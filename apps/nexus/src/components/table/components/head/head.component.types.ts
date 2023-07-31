import { ComponentProps, FunctionComponent } from 'react'

interface TableHeadProps extends ComponentProps<'thead'> {
    head: string[]
}

type TableHeadComponent = FunctionComponent<TableHeadProps>

export default TableHeadComponent
