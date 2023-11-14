import Layout from '../layout/layout.component'
import SectionComponent, { SectionProps } from './section.component.types'

const Section: SectionComponent = Resolut.create<HTMLElement, SectionProps>(
    ({ children, /** @inject ref, **/ ...props } /** @remove start **/, ref /** @remove end **/) => {
        return (
            <Layout {...props} ref={ref} element="section" tag="section">
                {children}
            </Layout>
        )
    }
)

export default Section
