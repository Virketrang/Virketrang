import Image from 'next/image'

import LinkedIn from '@/liedecke-noergaard/public/icons/linkedin.png'
import Facebook from '@/liedecke-noergaard/public/icons/facebook.png'
import Instagram from '@/liedecke-noergaard/public/icons/instagram.png'

import styles from './social-media.module.scss'
import SocialMediaComponent from './social-media.types'

const SocialMedia: SocialMediaComponent = memo(({ className = '' }) => {
    return (
        <nav className={`${styles.socialMedia} ${className}`}>
            <ul>
                <li>
                    <a href="">
                        <Image src={Facebook.src} width={32} height={32} alt="Facebooks logo" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={LinkedIn.src} width={32} height={32} alt="Linkedins logo" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Image src={Instagram.src} width={32} height={32} alt="Instagrams logo" />
                    </a>
                </li>
            </ul>
        </nav>
    )
})

SocialMedia.displayName = 'SocialMedia'

export default SocialMedia
