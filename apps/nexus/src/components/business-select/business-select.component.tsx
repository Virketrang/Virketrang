import { Business } from '@/assets'

import styles from './business-select.component.module.css'
import BusinessSelectComponent from './business-select.component.types'

const BusinessSelect: BusinessSelectComponent = memo(() => {
    return (
        <div className={styles.select} role="combobox">
            <Business />
            <span>Liedecke & Noergaard</span>
        </div>
    )
})

BusinessSelect.displayName = 'BusinessSelect'

export default BusinessSelect
