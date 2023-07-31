import { Entity, Http } from '@packages/index'

import { fetcher } from '@/common'
import { ProductTable } from '@/composables'

import ProductModal from './features/product-modal.component'
import Error from './error'
import Loading from './loading'

type Props = {}

const Page = ({}: Props) => {
    const { data, isLoading } = useSWR<Awaited<Http.Response<Entity.Product>>>(
        'http://localhost:8080/products',
        fetcher
    )
    const [open, setOpen] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>()

    if (isLoading) return <Loading />

    return (
        <>
            <Suspense fallback={<Loading />}>
                {data?.status === 'success' ? <ProductTable data={data.body} /> : <Error />}
            </Suspense>
            {createPortal(<ProductModal open={open} setOpen={setOpen} />, document.body)}
        </>
    )
}

export default Page
