import PaginationComponent from './pagination.component.types'
import styles from './pagination.component.module.css'

const Pagination: PaginationComponent = memo(
    forwardRef(({ back, forward, index, pages, ...props }, forwardedRef) => {
        return (
            <div className={`${styles.pagination} resolut-pagination`} {...props} ref={forwardedRef}>
                <button onClick={back} className={`${styles.back} back`}>
                    arrow_back_ios
                </button>
                <button className="page">{index}</button>
                <button onClick={forward} className={`${styles.forward} forward`}>
                    arrow_forward_ios
                </button>
            </div>
        )
    })
)

export default Pagination
