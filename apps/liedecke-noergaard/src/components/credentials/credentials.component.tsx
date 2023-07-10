import styles from './credentials.module.scss'
import CredentialsComponent from './credentials.types'

const currentYear = new Date().getFullYear()

const Credentials: CredentialsComponent = memo(({ copyright, address, cvr }) => {
    return (
        <div className={styles.credentials}>
            <span className={styles.data}>
                CVR: {cvr} - {address}
            </span>
            <span className={styles.cp}>
                Copyright © {currentYear} Liedecke & Noergaard. {copyright}
            </span>
            <span className={styles.virketrang}>Powered by Virketrang</span>
        </div>
    )
})

Credentials.displayName = 'Credentials'

export default Credentials
