import Image from 'next/image'
import { faker } from '@faker-js/faker'

import Banner from '@/public/images/banners/banner.jpeg'
import Distant from '@/public/images/products/confecture/confecture-33.webp'
import Close from '@/public/images/products/confecture/confecture-3.webp'

import { Locale } from '@/types'
import { getDictionary } from '@/server'
import { ProductCard } from '@/components'

import styles from './page.module.scss'

type PageProps = { params: { locale: Locale } }

const getSelectedProducts = async () => {
    return [...Array(8)].map(() => ({
        name: 'Flødebolle',
        price: parseInt(faker.commerce.price()),
        id: faker.string.uuid(),
        images: {
            distant: { src: Distant.src, alt: 'Demo image' },
            close: { src: Close.src, alt: 'Demo image' }
        },
        recent: true,
        materials: 'Eg/valnød'
    }))
}

export const metadata = {
    title: 'Liedecke & Noergaard | Forside',
    description: 'Forside'
}

export default async function Page({ params: { locale } }: PageProps) {
    const { landingPage, product, currency } = await getDictionary(locale)
    const products = await getSelectedProducts()

    return (
        <>
            <div className={styles.wrapper} role="banner">
                <Image
                    src={Banner.src}
                    fill
                    blurDataURL={Banner.blurDataURL}
                    placeholder="blur"
                    sizes="100vw"
                    alt={'Billede af et dækket bord'}
                    priority
                    className={styles.banner}
                />
            </div>
            <section className={styles.section}>
                <h2>{landingPage.selectedProducts}</h2>
                <div className={styles.grid} role="grid">
                    {products.map((entry) => (
                        <ProductCard key={entry.id} product={entry} dictionaries={{ product, currency }} />
                    ))}
                </div>
            </section>
        </>
    )
}
