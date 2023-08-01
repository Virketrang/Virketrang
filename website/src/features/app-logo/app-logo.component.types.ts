import { FunctionComponent } from 'react'

export interface AppLogoProps {
    locale: Workspace.I18N.Locale
}

type AppLogoComponent = FunctionComponent<AppLogoProps>

export default AppLogoComponent
