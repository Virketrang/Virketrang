import Image from 'next/image';
import ProductComponent from './product.component.types';
import styles from './product.component.module.sass';
import Link from 'next/link';

const Products: ProductComponent = ({ id, images, price, name }) => {
    return (
        <Link href={`/confecture/${id}`}>
            <div className={styles.product}>
                <div className={styles['image-container']}>
                    <Image
                        className={styles.close}
                        src={images.cover.distant.url}
                        alt={images.cover.distant.alt}
                        sizes="100vw"
                        fill
                        priority
                    />
                    <Image
                        className={styles.distant}
                        src={images.cover.close.url}
                        alt={images.cover.close.alt}
                        sizes="100vw"
                        fill
                        priority
                    />
                </div>
                <div className={styles.details}>
                    <h4>{name}</h4>
                    <span>{price} kr.</span>
                </div>
            </div>
        </Link>
    );
};

export default Products;
