import { FunctionComponent } from 'react'

export interface AppHeaderProps {
    locale: 'da' | 'en'
    navigation: {
        products: string
        team: string
        philosophy: string
        contact: string
        blog: string
    }
}

type AppHeaderComponent = FunctionComponent<AppHeaderProps>

export default AppHeaderComponent
