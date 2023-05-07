import { memo } from 'react'

import { styles, AppHeaderComponent } from '.'
import { AppNavigation, AppLogo, AppToolbar } from '..'

const AppHeader: AppHeaderComponent = memo(({ navigation, locale }) => {
    return (
        <header className={styles.header}>
            <AppLogo />
            <AppNavigation locale={locale} navigation={navigation} />
        </header>
    )
})

export default AppHeader
