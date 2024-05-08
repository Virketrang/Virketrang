import BannerImage from '@/liedecke-noergaard/public/images/banners/banner.jpeg'
import { getDictionary } from '@/liedecke-noergaard/server'
import { ProductCard, Banner } from '@/liedecke-noergaard/components'
import { __server__, isProductNew } from '@/liedecke-noergaard/common'

import styles from './page.module.scss'

interface Props {
    params: { locale: I18N.Locale }
}

const getProducts: () => Promise<Http.Response<Entity.Product[]>> = async () => {
    const response = await fetch(__server__ + 'products', { next: { tags: ['products'] } })

    return await response.json()
}

export async function generateMetadata({ params: { locale } }: Props) {
    const { landingPage } = await getDictionary(locale)

    return { title: landingPage.title, description: landingPage.description }
}

export default async function Page({ params: { locale } }: Props) {
    const { landingPage, product, currency } = await getDictionary(locale)
    const data = await getProducts()

    if (data.status === 'error' || data.status === 'failed') throw Error('Kunne ikke indlæse produkter')

    return (
        <>
            <Banner src={BannerImage.src} blurDataURL={BannerImage.blurDataURL} alt="Demo Billede" />
            <section className={styles.section}>
                <h2>{landingPage.selectedProducts}</h2>
                <div className={styles.grid} role="grid">
                    {data &&
                        data.body &&
                        data.body.map(({ id, name, materials, images, retail_price }) => (
                            <ProductCard
                                key={id}
                                product={{
                                    price: retail_price,
                                    name: name[locale],
                                    id,
                                    materials: materials.join('/'),
                                    images: {
                                        close: {
                                            alt: images[0].alt,
                                            src: images[0].url
                                        },
                                        distant: {
                                            alt: images[0].alt,
                                            src: images[1].url
                                        }
                                    },
                                    recent: isProductNew(new Date(data.body[0].created_at))
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
