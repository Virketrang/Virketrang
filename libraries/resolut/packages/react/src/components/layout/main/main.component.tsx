import Layout from '../layout/layout.component'
import MainComponent, { MainProps } from './main.component.types'

const Main: MainComponent = Resolut.create<HTMLElement, MainProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="main" tag="main">
                {children}
            </Layout>
        )
    }
)

export default Main
