import Link from 'next/link'
import { memo } from 'react'

import styles from './logo.module.scss'
import LogoComponent from './logo.types'

const Logo: LogoComponent = memo(({ country = false, href, className }) => {
    return (
        <Link href={href} className={`${styles.logo}${className ? ` ${className}` : ''}`}>
            <h4 className={styles.name}>Liedecke & Noergaard</h4>
            {country && <span className={styles.denmark}>Denmark</span>}
        </Link>
    )
})

Logo.displayName = 'Logo'

export default Logo
