import { InputField, MultiSelect, Option, Select } from '@/nexus/components'

type Props = {
    category: string
    materials: string[]
    setMaterials: React.Dispatch<React.SetStateAction<string[]>>
    available: boolean
    setAvailable: React.Dispatch<React.SetStateAction<boolean>>
    unit: string
    setUnit: React.Dispatch<React.SetStateAction<string>>
}

const materialsArray = [
    { value: 'oak', label: 'egetræ' },
    { value: 'walnut', label: 'valnød' },
    { value: 'chocolate', label: 'lys chokolade' },
    { value: 'dark chocolate', label: 'mørk chokolade' }
]

const Four: React.FunctionComponent<Props> = memo(
    ({ category, materials, setMaterials, available, setAvailable, unit, setUnit }) => {
        return (
            <>
                <MultiSelect
                    selected={materials}
                    selectedChanged={(selected) => setMaterials(selected)}
                    options={materialsArray}
                />
                <Select
                    value={available ? 'true' : 'false'}
                    onChange={(event) => setAvailable(event.target.value === 'true' ? true : false)}
                >
                    <Option value="true">Tilgængelig</Option>
                    <Option value="false">Utilgængelig</Option>
                </Select>
                <InputField type="number" min="0" />
                {category === 'craftmansship' && (
                    <>
                        <InputField type="number" min="0" />
                        <InputField type="number" min="0" />
                    </>
                )}
                <Select value={unit} onChange={(event) => setUnit(event.target.value)}>
                    {category === 'confecture' && (
                        <>
                            <Option value="gram">gram</Option>
                            <Option value="kilo">kilo</Option>
                        </>
                    )}
                    {category === 'cider' && (
                        <>
                            <Option value="milliliter">milliliter</Option>
                            <Option value="centiliter">centiliter</Option>
                            <Option value="liter">liter</Option>
                        </>
                    )}
                    {category === 'craftmansship' && (
                        <>
                            <Option value="millimeter">millimeter</Option>
                            <Option value="centimeter">centimeter</Option>
                            <Option value="meter">meter</Option>
                        </>
                    )}
                </Select>
            </>
        )
    }
)

Four.displayName = Four.name

export default Four
