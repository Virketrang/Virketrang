import { Entity, Http } from '@packages/index'

import { Dots } from '@/assets'
import { fetcher } from '@/common'

import ProductModal from './features/product-modal.component'
import styles from './page.module.css'
import Error from './error'
import Loading from './loading'
import { Suspense } from 'react'

type Props = {}

const Page = ({}: Props) => {
    const { data, isLoading } = useSWR<Awaited<Http.Response<Entity.Product>>>(
        'http://localhost:8080/products',
        fetcher
    )
    const [open, setOpen] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>()

    return (
        <>
            <Suspense fallback={<Loading />}>
                {data?.status === 'success' ? (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th role="none"></th>
                                <th>Navn</th>
                                <th>Kostpris</th>
                                <th>Salgspris</th>
                                <th>Lagerbeholdning</th>
                                <th>Designer</th>
                                <th role="none"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.body &&
                                data.body.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={product.images[0].url}
                                                alt="Demo image"
                                                className={styles.image}
                                            />
                                        </td>
                                        <td className={styles.name}>{product.name['da-DK']}</td>
                                        <td>{product.costPrice} kr.</td>
                                        <td>{product.retailPrice} kr.</td>
                                        <td>{product.stock} stk.</td>
                                        <td>{product.designer}</td>
                                        <td>
                                            <button>
                                                <Dots />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                ) : (
                    <Error />
                )}
            </Suspense>
            {createPortal(<ProductModal open={open} setOpen={setOpen} />, document.body)}
        </>
    )
}

export default Page
