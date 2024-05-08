export interface AppNavigationProps {
    locale: Workspace.I18N.Locale
    navigation: {
        products: string
        team: string
        philosophy: string
        contact: string
        blog: string
        earnings: string
    }
}

type AppNavigationComponent = React.FunctionComponent<AppNavigationProps>

export default AppNavigationComponent
