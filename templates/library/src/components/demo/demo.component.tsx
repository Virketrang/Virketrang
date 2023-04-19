import { FunctionComponent } from 'react'

import styles from './demo.component.module.sass'
import DemoComponent from './demo.component.types'

const Demo: DemoComponent = () => {
	return <div className={styles.color}>Demo</div>
}

export default Demo
