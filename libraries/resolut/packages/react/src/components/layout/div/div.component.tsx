import Layout from '../layout/layout.component'
import DivComponent, { DivProps } from './div.component.types'

const Div: DivComponent = Resolut.create<HTMLDivElement, DivProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="div" tag="div">
                {children}
            </Layout>
        )
    }
)

export default Div
