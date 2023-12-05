import Image from 'next/image'

import styles from './banner.component.module.scss'
import BannerComponent from './banner.component.types'

const Banner: BannerComponent = memo(({ src, blurDataURL, alt }) => {
    return (
        <div className={styles.wrapper} role="banner">
            <Image
                src={src}
                fill
                blurDataURL={blurDataURL}
                placeholder="blur"
                sizes="100vw"
                alt={alt}
                priority
                className={styles.banner}
            />
        </div>
    )
})

export default Banner
