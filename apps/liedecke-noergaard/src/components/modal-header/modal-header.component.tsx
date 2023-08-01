import { Close } from '@/liedecke-noergaard/assets'

import styles from './modal-header.module.scss'
import ModalHeaderComponent from './modal-header.types'

const ModalHeader: ModalHeaderComponent = memo(({ title, onClick }) => {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
            <Close onClick={onClick} />
        </div>
    )
})

ModalHeader.displayName = 'ModalHeader'

export default ModalHeader
