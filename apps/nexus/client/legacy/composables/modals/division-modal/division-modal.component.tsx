// import { Modal } from '@resolut/client'

import { PRODUCT_CATEGORY } from '@/enums'
import { InputField, MultiSelect } from '@/nexus/client/components'
import { useSnackbar } from '@/nexus/client/common'

import DivisionModalComponent from './division-modal.component.types'
import styles from './division-modal.component.module.css'

const DivisionModal: DivisionModalComponent = memo(({ open, setOpen }) => {
    const snackbar = useSnackbar()

    const [name, setName] = useState('')
    const [name2, setName2] = useState('')
    const [categories, setCategories] = useState<PRODUCT_CATEGORY[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/divisions', {
            body: JSON.stringify({ name: { 'da-DK': name, 'en-GB': name2 }, categories }),
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            method: 'post'
        })

        const { status } = await response.json()

        setOpen(false)

        if (status !== 'success') snackbar.warning('Inddeling blev ikke tilføjet!')

        return snackbar.success('Inddeling tilføjet!')
    }

    return (
        <>
            {/* <Modal onSubmit={handleSubmit} open={open}> */}
            <h4>Inddeling</h4>
            <div className={styles.controller}>
                <InputField placeholder="Dansk navn" value={name} onChange={(event) => setName(event.target.value)} />
                <InputField
                    placeholder="Engelsk navn"
                    value={name2}
                    onChange={(event) => setName2(event.target.value)}
                />
                <MultiSelect
                    selected={categories}
                    selectedChanged={(selected) => setCategories(selected as PRODUCT_CATEGORY[])}
                    options={[
                        { value: PRODUCT_CATEGORY.CIDER, label: 'Cider' },
                        { value: PRODUCT_CATEGORY.CONFECTURE, label: 'Konfekture' },
                        { value: PRODUCT_CATEGORY.CRAFTMANSSHIP, label: 'Håndværk' }
                    ]}
                />
            </div>
            <div className={styles.controls}>
                {/* <Button onClick={() => setOpen(false)} color="secondary">
                    Fortryd
                </Button>
                <Button onClick={() => null}>Opret</Button> */}
            </div>
            {/* </Modal> */}
        </>
    )
})

export default DivisionModal
