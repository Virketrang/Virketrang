import { Input, Select } from '@/apps/nexus/client/desktop-old/src/components'

const ProductionUnits = () => {
    const store = useStore($CreateCompany)
    const [index, setIndex] = createSignal<number>(0)

    onMount(() => {
        if ($CreateCompany.get().production_units.length === 0) {
            $CreateCompany.set({
                ...$CreateCompany.get(),
                production_units: [
                    {
                        unit_number: '',
                        primary_location: 'false',
                        address: {
                            street_name: '',
                            street_number: '',
                            apartment: '',
                            postal_code: '',
                            city: '',
                            country: 'denmark'
                        }
                    }
                ]
            })
        }
    })

    const add = () => {
        $CreateCompany.set({
            ...$CreateCompany.get(),
            production_units: [
                ...$CreateCompany.get().production_units,
                {
                    unit_number: '',
                    primary_location: 'false',
                    address: {
                        street_name: '',
                        street_number: '',
                        apartment: '',
                        postal_code: '',
                        city: '',
                        country: 'denmark'
                    }
                }
            ]
        })
    }

    const remove = () => {
        $CreateCompany.set({
            ...$CreateCompany.get(),
            production_units: [...$CreateCompany.get().production_units.filter((_, i) => i !== index())]
        })
        setIndex(index() - 1)
    }

    return (
        <>
            <div flex flex-diretion:column align-items:center gap="2rem">
                <h4>Produktionsenhed {index() + 1}</h4>
                <Show when={index() !== 0}>
                    <button onClick={remove}>Slet</button>
                </Show>
                <div grid gap="2rem">
                    <Input
                        column="1 / 3"
                        row="1"
                        name="unit_number"
                        label="P-nummer"
                        value={store().production_units[index()]?.unit_number || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        unit_number: (event.target as HTMLInputElement).value
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                            console.log(store().production_units)
                        }}
                    />
                    <Input
                        column="3 / 5"
                        row="1"
                        name="street_name"
                        label="Gadenavn"
                        value={store().production_units[index()]?.address?.street_name || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            street_name: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="1 / 2"
                        row="2"
                        name="street_number"
                        label="Husnr."
                        value={store().production_units[index()]?.address?.street_number || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            street_number: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="2 / 3"
                        row="2"
                        name="apartment"
                        label="Lejlighed"
                        value={store().production_units[index()]?.address?.apartment || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            apartment: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="3 / 5"
                        row="2"
                        name="postal_code"
                        label="Postnr."
                        value={store().production_units[index()]?.address?.postal_code || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            postal_code: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="1 / 3"
                        row="3"
                        name="city"
                        label="By"
                        value={store().production_units[index()]?.address?.city || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            city: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    />
                    <Select
                        column="3 / 5"
                        row="3"
                        name="country"
                        label="Land"
                        value={store().production_units[index()]?.address?.country || ''}
                        onChange={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index()),
                                    {
                                        ...$CreateCompany.get().production_units[index()],
                                        address: {
                                            ...$CreateCompany.get().production_units[index()].address,
                                            country: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index() + 1)
                                ]
                            })
                        }}
                    >
                        <option value="denmark">Danmark</option>
                    </Select>
                </div>
            </div>

            <div class="stepper" role="progressbar" flex gap="1rem">
                <For each={store().production_units}>
                    {(_, i) => (
                        <button active={index() === i()} onClick={() => setIndex(i)} elevated circle size="2rem">
                            {i() + 1}
                        </button>
                    )}
                </For>

                <button elevated size="2rem" circle onClick={add}>
                    +
                </button>
            </div>
        </>
    )
}

export default ProductionUnits
