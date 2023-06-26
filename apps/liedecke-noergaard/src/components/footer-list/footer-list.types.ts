import { FunctionComponent } from 'react'

type Entry = { href: string; label: string }

type FooterListComponent = FunctionComponent<{ title: string; entries: Entry[]; className?: string }>

export default FooterListComponent
