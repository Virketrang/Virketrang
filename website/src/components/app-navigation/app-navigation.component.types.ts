import { FunctionComponent } from 'react'

export interface AppNavigationProps {
    locale: 'da' | 'en'
    navigation: {
        products: string
        team: string
        philosophy: string
        contact: string
        blog: string
    }
}

type AppNavigationComponent = FunctionComponent<AppNavigationProps>

export default AppNavigationComponent
