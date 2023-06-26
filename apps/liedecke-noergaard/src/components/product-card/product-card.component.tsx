'use client'
import { memo } from 'react'
import Image from 'next/image'

import { useStore, formatCurrency } from '@/common'
import { ArrowRight, ShoppingBag } from '@/assets'

import ProductCardComponent from './product-card.types'
import styles from './product-card.module.scss'

const ProductCard: ProductCardComponent = memo(
    ({ product: { id, images, name, price, recent, materials }, dictionaries }) => {
        const { dispatch } = useStore()

        const handleClick = () =>
            dispatch({
                type: 'ADD',
                payload: { id, name, price, materials, image: images.close, quantity: 1 }
            })

        return (
            <div className={styles.grid} role="grid">
                <div className={styles.wrapper} role="separator">
                    <Image
                        src={images.distant.src}
                        alt={images.distant.alt}
                        fill
                        sizes="(max-width: 878px) 100vw, (max-width: 1200px) 50vw, (max-width: 1759px) 33vw, 25vw"
                    />
                    <Image
                        className={styles.close}
                        src={images.close.src}
                        alt={images.close.alt}
                        fill
                        sizes="(max-width: 878px) 100vw, (max-width: 1200px) 50vw, (max-width: 1759px) 33vw, 25vw"
                    />
                    {recent && <span className={styles.newsLabel}>{dictionaries.product.newsLabel}</span>}
                </div>
                <div className={styles.details}>
                    <h4>{name}</h4>
                    <span>{formatCurrency(price, dictionaries.currency === 'DKK' ? 'DKK' : 'GBP')}</span>
                </div>
                <div className={styles.actions}>
                    <button className={`${styles.more} ${styles.textButton}`}>{dictionaries.product.readMore}</button>
                    <button className={`${styles.purchase} ${styles.textButton}`} onClick={handleClick}>
                        {dictionaries.product.add}
                    </button>
                    <button className={`${styles.more} ${styles.iconButton}`}>
                        <ArrowRight width={24} height={24} />
                    </button>
                    <button className={`${styles.purchase} ${styles.iconButton}`} onClick={handleClick}>
                        <ShoppingBag width={24} height={24} fill="#fff" />
                    </button>
                </div>
            </div>
        )
    }
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
