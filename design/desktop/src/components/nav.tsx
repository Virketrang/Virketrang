const Nav = () => {
    return (
        <nav position:relative z-index="2" bg-white elevated width="100%" height="3.5rem" padding-inline="4rem">
            <ul flex height="100%" gap="2rem" align-items:center class="list">
                <li>
                    <a href="/dashboard">Oversigt</a>
                </li>
                <li>
                    <a href="/dashboard/orders">Ordrer</a>
                </li>
                <li>
                    <a href="/dashboard/products">Produkter</a>
                </li>
                <li>
                    <a href="/dashboard/employees">Medarbejdere</a>
                </li>
                <li>
                    <a href="/dashboard/website">Hjemmeside</a>
                </li>
                <li>
                    <a href="/dashboard/bookkeeping">Bogføring</a>
                </li>
                <li>
                    <a href="/dashboard/customers">Kundekartotek</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
