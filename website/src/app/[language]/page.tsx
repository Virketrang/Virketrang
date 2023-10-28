import { Cormorant_Garamond } from 'next/font/google'

import styles from './page.module.sass'

export const metadata = {
    title: 'Forside',
    description: 'Forsiden for Virketrang.com'
}

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={`${styles.first}`}>
                <h1>Velkommen</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </section>
            <section className={`${styles.second}`}></section>
        </main>
    )
}
