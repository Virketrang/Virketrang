import { ComponentProps, ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from 'react'

export interface PaginationProps extends ComponentProps<'div'> {
    back: () => void
    forward: () => void
    index: number
    pages: number
}

export type PaginationRef = RefAttributes<HTMLDivElement>

type PaginationComponent = MemoExoticComponent<ForwardRefExoticComponent<PaginationProps & PaginationRef>>

export default PaginationComponent
