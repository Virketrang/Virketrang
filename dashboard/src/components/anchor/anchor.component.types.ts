import { ComponentPropsWithoutRef, ForwardRefExoticComponent, MemoExoticComponent, RefAttributes } from 'react'

export interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
    href: string
}

export type AnchorRef = RefAttributes<HTMLAnchorElement>

type AnchorComponent = MemoExoticComponent<ForwardRefExoticComponent<AnchorProps & AnchorRef>>

export default AnchorComponent
