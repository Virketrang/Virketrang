'use client'
import styles from './footer-list.module.scss'
import FooterListComponent from './footer-list.types'

const FooterList: FooterListComponent = memo(({ title, entries, className = '' }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen((currentValue) => !currentValue)

    return (
        <div className={`${styles.list} ${className}`}>
            <nav>
                <h4 onClick={handleClick}>{title}</h4>
                <div className={open ? styles.opened : ''}>
                    <ul>
                        {entries.map(({ label, href }) => (
                            <li key={label}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
})

FooterList.displayName = 'FooterList'

export default FooterList
