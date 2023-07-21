import BannerImage from '@/public/images/banners/banner.jpeg'
import { Entity, Http } from '@/packages/index'
import { Locale } from '@/types'
import { getDictionary } from '@/server'
import { ProductCard, Banner } from '@/components'
import { __server__, isProductNew } from '@/common'

import styles from './page.module.scss'

type PageProps = { params: { locale: Locale } }

const getProducts: () => Http.Response<Entity.Product> = async () => {
    const response = await fetch(__server__ + 'products')

    return await response.json()
}

export async function generateMetadata({ params: { locale } }: PageProps) {
    const { landingPage } = await getDictionary(locale)

    return { title: landingPage.title, description: landingPage.description }
}

export default async function Page({ params: { locale } }: PageProps) {
    const { landingPage, product, currency } = await getDictionary(locale)
    const data = await getProducts()

    if (data.status === 'error' || data.status === 'failure') throw Error('Kunne ikke indlæse produkter')

    return (
        <>
            <Banner src={BannerImage.src} blurDataURL={BannerImage.blurDataURL} alt="Demo Billede" />
            <section className={styles.section}>
                <h2>{landingPage.selectedProducts}</h2>
                <div className={styles.grid} role="grid">
                    {data &&
                        data.body &&
                        data.body.map(({ id, retailPrice, name, materials, images }) => (
                            <ProductCard
                                key={id}
                                product={{
                                    price: retailPrice,
                                    name: name[locale],
                                    id,
                                    materials: materials.join('/'),
                                    images: {
                                        close: { alt: images[0].alt, src: images[0].url },
                                        distant: { alt: images[1].alt, src: images[1].url }
                                    },
                                    recent: isProductNew(new Date(data.body[0].createdAt!))
                                }}
                                dictionaries={{ product, currency }}
                                locale={locale}
                            />
                        ))}
                </div>
            </section>
        </>
    )
}
