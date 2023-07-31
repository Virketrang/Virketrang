import { InputField, Select, Textarea, Option } from '@/components'
import Enums from 'packages/types/enums'

type Props = {
    state: { name: string; category: string; shortDescription: string }
    setState: {
        setName: React.Dispatch<React.SetStateAction<string>>
        setCategory: React.Dispatch<React.SetStateAction<Enums.PRODUCT_CATEGORY>>
        setShortDescription: React.Dispatch<React.SetStateAction<string>>
    }
}

const One: React.FunctionComponent<Props> = memo(({ state, setState }) => {
    return (
        <>
            <InputField
                placeholder="Navn"
                value={state.name}
                onChange={(event) => setState.setName(event.target.value)}
            />
            <Select
                value={state.category}
                onChange={(event) => setState.setCategory(event.target.value as Enums.PRODUCT_CATEGORY)}
            >
                <Option value="confecture">Konfekture</Option>
                <Option value="craftmansship">Håndværk</Option>
                <Option value="cider">Cider</Option>
            </Select>
            <Textarea
                placeholder="Kort beskrivelse"
                value={state.shortDescription}
                onChange={(event) => setState.setShortDescription(event.target.value)}
            />
        </>
    )
})

One.displayName = One.name

export default One
