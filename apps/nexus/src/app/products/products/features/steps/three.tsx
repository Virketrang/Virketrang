import { InputField, UploadField } from '@/components'

type Props = {
    state: { deliveryTime: number; stock: number; cost: number; retailPrice: number; images: File[] }
    setState: {
        setDeliveryTime: React.Dispatch<React.SetStateAction<number>>
        setStock: React.Dispatch<React.SetStateAction<number>>
        setCost: React.Dispatch<React.SetStateAction<number>>
        setRetailPrice: React.Dispatch<React.SetStateAction<number>>
        setImages: React.Dispatch<React.SetStateAction<File[]>>
    }
}

const Three: React.FunctionComponent<Props> = memo(({ state, setState }) => {
    return (
        <>
            <InputField
                value={state.deliveryTime}
                onChange={(event) => setState.setDeliveryTime(parseInt(event.target.value))}
                type="number"
                placeholder="Leveringstid"
                min={0}
            />
            <InputField
                value={state.stock}
                onChange={(event) => setState.setStock(parseInt(event.target.value))}
                type="number"
                placeholder="Lagerbeholdning"
                step={10}
                min={0}
            />
            <InputField
                value={state.cost}
                onChange={(event) => setState.setCost(parseInt(event.target.value))}
                type="number"
                placeholder="Kostpris"
                step={10}
                min={0}
            />
            <InputField
                value={state.retailPrice}
                onChange={(event) => setState.setRetailPrice(parseInt(event.target.value))}
                type="number"
                placeholder="Salgspris"
                step={10}
                min={0}
            />
            <UploadField upload={(files) => setState.setImages(files)} min={8} max={8} />
        </>
    )
})

Three.displayName = Three.name

export default Three
