import { PRODUCT_CATEGORY, SORTING_OPTION } from '@/packages/index'

import BannerImage from '@/public/images/banners/confecture.jpeg'
import { getDictionary } from '@/server'
import { Locale } from '@/types'
import { Heading } from '@/components'
import { ProductList } from '@/composables'
import { API } from '@/common'

type PageProps = { params: { locale: Locale } }

export async function generateMetadata({ params: { locale } }: PageProps) {
    const { confecture } = await getDictionary(locale)

    return { title: confecture.title, description: confecture.description }
}

export default async function Page({ params: { locale } }: PageProps) {
    const { confecture, product, currency, filter } = await getDictionary(locale)
    const products = await API.getProducts({ sortBy: SORTING_OPTION.PRICE_ASSENDING })
    const divisions = await API.getDivisions()

    if (divisions.status !== 'success') return <div>Indlæser...</div>
    if (products.status !== 'success') return <div>Indlæser...</div>

    return (
        <>
            <Heading
                title={confecture.title}
                description={confecture.description}
                banner={{ src: BannerImage.src, alt: 'Demo Image', blurDataURL: BannerImage.blurDataURL! }}
            />
            <ProductList
                divisions={divisions.body.filter((division) =>
                    division.categories.includes(PRODUCT_CATEGORY.CONFECTURE)
                )}
                products={products.body.filter((p) => p.category === PRODUCT_CATEGORY.CONFECTURE)}
                dictionaries={{ product, currency, filter }}
                locale={locale}
            />
        </>
    )
}
