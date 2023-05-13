import { memo } from 'react'

import { styles, AppHeaderComponent } from '.'
import { AppNavigation, AppLogo, AppToolbar } from '..'

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
