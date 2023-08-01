import { PRODUCT_CATEGORY, SORTING_OPTION } from '@/enums'

import BannerImage from '@/liedecke-noergaard/public/images/banners/confecture.jpeg'
import { Heading } from '@/liedecke-noergaard/components'
import { ProductList } from '@/liedecke-noergaard/composables'
import { getDictionary } from '@/liedecke-noergaard/server'
import { API } from '@/liedecke-noergaard/common'

type PageProps = { params: { locale: Workspace.I18N.Locale } }

export async function generateMetadata({ params: { locale } }: PageProps) {
    const { craftmansship } = await getDictionary(locale)

    return { title: craftmansship.title, description: craftmansship.description }
}

export default async function Page({ params: { locale } }: PageProps) {
    const { craftmansship, product, currency, filter } = await getDictionary(locale)
    const products = await API.getProducts({ sortBy: SORTING_OPTION.PRICE_ASSENDING })
    const divisions = await API.getDivisions()

    if (divisions.status !== 'success') throw Error('Kunne ikke indlæse inddelinger')
    if (products.status !== 'success') throw Error('Kunne ikke indlæse produkter')

    return (
        <>
            <Heading
                title={craftmansship.title}
                description={craftmansship.description}
                banner={{ src: BannerImage.src, alt: 'Demo Image', blurDataURL: BannerImage.blurDataURL! }}
            />
            <ProductList
                divisions={divisions.body.filter((division) =>
                    division.categories.includes(PRODUCT_CATEGORY.CRAFTMANSSHIP)
                )}
                products={products.body.filter((p) => p.category === PRODUCT_CATEGORY.CRAFTMANSSHIP)}
                dictionaries={{ product, currency, filter }}
                locale={locale}
            />
        </>
    )
}
