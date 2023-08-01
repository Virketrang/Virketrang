export interface AppHeaderProps {
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

type AppHeaderComponent = React.FunctionComponent<AppHeaderProps>

export default AppHeaderComponent
