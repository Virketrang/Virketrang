import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    preload: true
})

import { styles, AppNavigationComponent } from '../app-navigation'

const AppNavigation: AppNavigationComponent = memo(({ locale, navigation }) => {
    return (
        <nav className={`${styles.nav} ${cormorantGaramond.className}`}>
            <Link href={`/${locale}/products`}>{navigation.products}</Link>
            <Link href={`/${locale}/team`}>{navigation.team}</Link>
            <Link href={`/${locale}/philosophy`}>{navigation.philosophy}</Link>
            <Link href={`/${locale}/contact`}>{navigation.contact}</Link>
            <Link href={`/${locale}/blog`}>{navigation.blog}</Link>
            <Link href={`/${locale}/earnings`}>{navigation.earnings}</Link>
        </nav>
    )
})

export default AppNavigation
