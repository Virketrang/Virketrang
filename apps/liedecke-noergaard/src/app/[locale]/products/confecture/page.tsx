import BannerImage from '@/public/images/banners/confecture.jpeg'

import { Product } from '@/packages/interfaces'
import { SORTING_OPTION } from '@/packages/enums'
import { getDictionary } from '@/server'
import { Locale } from '@/types'
import { Banner, ProductCard } from '@/components'
import { FilterMenu, Toolbar } from '@/composables'
import { __server__, isProductNew } from '@/common'

import styles from './page.module.scss'

type PageProps = { params: { locale: Locale } }

const getProducts: ({ sortBy }: { sortBy: SORTING_OPTION }) => Promise<{ status: string; body: Product[] }> = async ({
    sortBy
}) => {
    const response = await fetch(__server__ + 'products?' + `sort=${sortBy}`)

    return await response.json()
}

export async function generateMetadata({ params: { locale } }: PageProps) {
    const { confecture } = await getDictionary(locale)

    return { title: confecture.title, description: confecture.description }
}

export default async function Page({ params: { locale } }: PageProps) {
    const { confecture, product, currency, filter } = await getDictionary(locale)
    const data = await getProducts({ sortBy: SORTING_OPTION.PRICE_ASSENDING })

    return (
        <>
            <Banner src={BannerImage.src} alt="Demo Image" blurDataURL={BannerImage.blurDataURL} />
            <div className={styles.heading} role="heading">
                <h1>{confecture.title}</h1>
                <p>{confecture.description}</p>
            </div>
            <Toolbar />
            <div className={styles.wrapper}>
                <FilterMenu dictionary={filter} />
                <section className={styles.grid} role="grid">
                    {data &&
                        data.body &&
                        data.body.map(({ id, retailPrice, name, materials, images }) => (
                            <ProductCard
                                key={id}
                                product={{
                                    price: retailPrice,
                                    name,
                                    id,
                                    materials: materials.join('/'),
                                    images: {
                                        close: { alt: images[0].alt, src: images[0].url },
                                        distant: { alt: images[1].alt, src: images[1].url }
                                    },
                                    recent: isProductNew(new Date(data.body[0].createdAt))
                                }}
                                dictionaries={{ product, currency }}
                            />
                        ))}
                </section>
            </div>
        </>
    )
}
