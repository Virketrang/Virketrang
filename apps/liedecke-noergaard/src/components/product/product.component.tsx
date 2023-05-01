import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import ProductComponent from './product.component.types';
import styles from './product.component.module.sass';

const Product: ProductComponent = memo(({ id, category, language, images, price, name, index }) => {
    return (
        <Link href={`/${language}/${category}/${id}`}>
            <div className={styles.product}>
                <div className={styles['image-container']}>
                    <Image
                        className={styles.close}
                        src={images.cover.distant.url}
                        alt={images.cover.distant.alt}
                        sizes="(min-width: 60em) 24vw,
                               (min-width: 28em) 45vw,
                               100vw"
                        fill
                        priority={index < 8}
                        placeholder="blur"
                    />
                    <Image
                        className={styles.distant}
                        src={images.cover.close.url}
                        alt={images.cover.close.alt}
                        sizes="(min-width: 60em) 24vw,
                               (min-width: 28em) 45vw,
                               100vw"
                        fill
                        priority={index < 8}
                        placeholder="blur"
                    />
                </div>
                <div className={styles.details}>
                    <h4>{name}</h4>
                    <span>{price} kr.</span>
                </div>
            </div>
        </Link>
    );
});

Product.displayName = 'Product';

export default Product;
