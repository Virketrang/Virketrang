import styles from './pagination.component.module.css'

type PaginationProps = { back: () => void; forward: () => void; index: number; pages: number }

const Pagination = ({ back, forward, index, pages, ...props }: PaginationProps) => {
    return (
        <div className="inline-block" {...props}>
            <button onClick={back} style={{ fontFamily: 'Material Symbols Outlined' }}>
                arrow_back_ios
            </button>
            <button className="page">{index}</button>
            <button onClick={forward} style={{ fontFamily: 'Material Symbols Outlined' }}>
                arrow_forward_ios
            </button>
        </div>
    )
}

export default Pagination
