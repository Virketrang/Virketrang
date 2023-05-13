import { Cormorant_Garamond } from 'next/font/google'

import styles from './page.module.sass'

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    preload: true
})

export const metadata = {
    title: 'Forside',
    description: 'Forsiden for Virketrang.com'
}

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={`${styles.first} ${cormorantGaramond.className}`}>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </section>
            <section className={`${styles.second}`}></section>
        </main>
    )
}
