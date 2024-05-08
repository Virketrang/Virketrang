import styles from './pagination.component.module.css'

type PaginationProps = { back: () => void; forward: () => void; index: number; pages: number }

const Pagination = ({ back, forward, index, pages, ...props }: PaginationProps) => {
    return (
        <div class={`${styles.pagination} resolut-pagination`} {...props}>
            <button onClick={back} class={`${styles.back} back`}>
                arrow_back_ios
            </button>
            <button class="page">{index}</button>
            <button onClick={forward} class={`${styles.forward} forward`}>
                arrow_forward_ios
            </button>
        </div>
    )
}

export default Pagination
