import styles from './page.module.sass'

import { Anchor } from '@/components'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Landing</h1>
            <Anchor href="/authentication">Authentication</Anchor>
        </main>
    )
}
