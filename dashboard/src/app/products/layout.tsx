import styles from './layout.module.css'

const Page = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(true)

    return (
        <main className={styles.main}>
            <div className={styles.toolbar}>
                <h1>Produkter</h1>
                <div role="toolbar">
                    <button onClick={handleClick} className={styles.create}>
                        Opret
                    </button>
                </div>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/products" end>
                            Produkter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/products/divisions">
                            Inddelinger
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/products/materials">
                            Materialer
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet context={[open, setOpen]} />
            </div>
        </main>
    )
}

export default Page
