export interface PaginationProps extends React.ComponentProps<'div'> {
    back: () => void
    forward: () => void
    index: number
    pages: number
}

export type PaginationRef = React.RefAttributes<HTMLDivElement>

type PaginationComponent = React.MemoExoticComponent<React.ForwardRefExoticComponent<PaginationProps & PaginationRef>>

export default PaginationComponent
