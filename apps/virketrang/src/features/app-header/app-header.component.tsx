import { styles, AppHeaderComponent } from '../app-header'
import { AppNavigation, AppLogo, AppToolbar } from '../../features'

const AppHeader: AppHeaderComponent = memo(({ navigation, locale }) => {
    return (
        <header className={styles.header}>
            <AppLogo locale={locale} />
            <AppNavigation locale={locale} navigation={navigation} />
            <AppToolbar locale={locale} />
        </header>
    )
})

export default AppHeader
