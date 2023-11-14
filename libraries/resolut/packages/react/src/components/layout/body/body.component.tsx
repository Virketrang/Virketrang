import Layout from '../layout/layout.component'
import BodyComponent, { BodyProps } from './body.component.types'

const Body: BodyComponent = Resolut.create<HTMLBodyElement, BodyProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="body" tag="body">
                {children}
            </Layout>
        )
    }
)

export default Body
