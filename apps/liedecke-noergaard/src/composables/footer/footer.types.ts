import { Dictionary } from '@/liedecke-noergaard/types'

type FooterComponent = FunctionComponent<{
    dictionary: Dictionary<'footer'>
    locale: Workspace.I18N.Locale
}>

export default FooterComponent
