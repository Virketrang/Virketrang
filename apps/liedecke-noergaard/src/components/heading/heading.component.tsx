import { Banner } from '@/liedecke-noergaard/components'

import HeadingComponent from './heading.component.types'
import styles from './heading.component.module.scss'

const Heading: HeadingComponent = memo(({ banner, title, description }) => {
    return (
        <>
            <Banner {...banner} />
            <div className={styles.heading} role="heading">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
})

Heading.displayName = Heading.name

export default Heading
