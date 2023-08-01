import { PRODUCT_CATEGORY } from '@/enums'
import { convertObjectToFormData } from '@/nexus/common'
import { Stepper, Button } from '@/nexus/components'

import ProductModalComponent from './product-modal.component.types'
import styles from './product-modal.component.module.css'

import { One, Two, Three, Four, Five } from './steps'

const ProductModal: ProductModalComponent = memo(({ open, setOpen }) => {
    const [step, setStep] = useState(1)
    const modal = createRef<HTMLDialogElement>()

    const [name, setName] = useState<string>('')
    const [category, setCategory] = useState<PRODUCT_CATEGORY>(PRODUCT_CATEGORY.CONFECTURE)
    const [shortDescription, setShortDescription] = useState<string>('')
    const [longDescription, setLongDescription] = useState<string>('')
    const [deliveryTime, setDeliveryTime] = useState<number>(0)
    const [stock, setStock] = useState<number>(0)
    const [cost, setCost] = useState<number>(0)
    const [retailPrice, setRetailPrice] = useState<number>(0)
    const [images, setImages] = useState<File[]>([])
    const [materials, setMaterials] = useState<string[]>([])
    const [available, setAvailable] = useState<boolean>(true)
    const [unit, setUnit] = useState<string>('gram')

    useEffect(() => {
        modal.current?.removeAttribute('open')
        if (open === true) {
            modal.current?.showModal()
        }
    }, [open])

    const next = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (step < 5) {
            event.preventDefault()
            setStep((prev) => prev + 1)
        }
    }

    const back = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        if (step === 1) {
            modal.current?.close()
            setOpen(false)
            return
        }

        return setStep((prev) => prev - 1)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data: Workspace.Entity.Product.Create = {
            name: { 'da-DK': name, 'en-GB': name },
            description: {
                short: { 'da-DK': shortDescription, 'en-GB': shortDescription },
                long: { 'da-DK': longDescription, 'en-GB': longDescription }
            },
            category: category,
            deliveryTime: deliveryTime,
            stock: stock,
            retailPrice: retailPrice,
            costPrice: cost,
            available: available,
            designer: 'Sigfred Frey Nørgaard Knudsen',
            materials: materials,
            measurement: { unit: unit, value: 100 }
        }

        const formData = convertObjectToFormData(data)

        for (let i = 0; i < images.length; i++) {
            formData.append('images[]', images[i])
        }

        console.log([...formData.entries()])

        const response = await fetch('http://localhost:8080/products', {
            body: formData,
            method: 'post'
        })

        const json = await response.json()

        modal.current?.close()

        setOpen(false)
    }

    return (
        <dialog ref={modal} className={styles.modal}>
            <div className={styles.wrapper}>
                <Stepper steps={5} step={step} />
                <form className={styles.form} method="dialog" onSubmit={handleSubmit}>
                    <div data-category={category} className={`${styles.fields} ${styles[`fields-${step}`]}`}>
                        {step === 1 && (
                            <One
                                state={{ name, shortDescription, category }}
                                setState={{ setName, setShortDescription, setCategory }}
                            />
                        )}
                        {step === 2 && <Two state={longDescription} setState={setLongDescription} />}
                        {step === 3 && (
                            <Three
                                state={{ cost, retailPrice, deliveryTime, stock, images }}
                                setState={{ setCost, setRetailPrice, setDeliveryTime, setImages, setStock }}
                            />
                        )}
                        {step === 4 && (
                            <Four
                                available={available}
                                setAvailable={setAvailable}
                                materials={materials}
                                setMaterials={setMaterials}
                                category={category}
                                unit={unit}
                                setUnit={setUnit}
                            />
                        )}
                        {step === 5 && <Five />}
                    </div>
                    <div className={styles.actions}>
                        <Button onClick={back} color="secondary">
                            {step === 1 ? 'Fortryd' : 'Tilbage'}
                        </Button>
                        <Button onClick={next}>{step === 5 ? 'Opret' : 'Fortsæt'}</Button>
                    </div>
                </form>
            </div>
        </dialog>
    )
})

ProductModal.displayName = ProductModal.name

export default ProductModal
