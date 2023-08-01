'use client'
import { FilterMenu, Toolbar } from '@/liedecke-noergaard/composables'
import { ProductCard } from '@/liedecke-noergaard/components'
import { isProductNew } from '@/liedecke-noergaard/common'

import ProductListComponent from './product-list.component.types'
import styles from './product-list.component.module.scss'

const ProductList: ProductListComponent = memo(
    ({ divisions, dictionaries: { currency, filter, product }, products, locale }) => {
        const [sortBy, setSortBy] = useState<string>('MOST_RECENT')
        const [open, setOpen] = useState(false)

        return (
            <>
                <Toolbar open={open} setOpen={setOpen} sortBy={sortBy} setSortBy={setSortBy} />
                <div className={styles.wrapper}>
                    <FilterMenu
                        divisions={divisions}
                        locale={locale}
                        currency={currency === 'DKK' ? 'DKK' : 'GBP'}
                        open={open}
                        dictionary={filter}
                    />
                    <section className={styles.grid} role="grid">
                        {products.map(({ id, retailPrice, name, materials, images, createdAt }) => (
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
                                    recent: isProductNew(new Date(createdAt!))
                                }}
                                dictionaries={{ product, currency }}
                                locale={locale}
                            />
                        ))}
                    </section>
                </div>
            </>
        )
    }
)

ProductList.displayName = ProductList.name

export default ProductList
