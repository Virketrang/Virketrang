import { Interfaces } from '@packages/index'
import { fetcher, useSnackbar } from '@/common'
import Loading from './loading'
import { DivisionModal, DivisionTable } from '@/composables'

const Page = () => {
    const { data, isLoading } = useSWR<Awaited<Interfaces.Http.Response<Interfaces.Entity.Division>>>(
        'http://localhost:8080/divisions',
        fetcher
    )
    const [open, setOpen] = useOutletContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>()

    const snackbar = useSnackbar()

    useEffect(() => {
        snackbar.success('Test', 5000)
    }, [])

    if (data?.status !== 'success' || isLoading) return <Loading />
    console.log(data)
    return (
        <>
            <Suspense fallback={<Loading />}>
                <DivisionTable data={data.body} />
            </Suspense>

            {open && createPortal(<DivisionModal open={open} setOpen={setOpen} />, document.body)}
        </>
    )
}

export default Page
