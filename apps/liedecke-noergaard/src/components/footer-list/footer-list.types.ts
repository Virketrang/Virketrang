type Entry = { href: string; label: string }

type FooterListComponent = React.FunctionComponent<{ title: string; entries: Entry[]; className?: string }>

export default FooterListComponent
