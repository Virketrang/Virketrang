import { Input, Select } from '@/nexus/client/desktop/components'
import { useEffect, useState } from 'react'
import { $CreateCompany } from '../../../../../stores'
import { useStore } from '@nanostores/react'
import { removeProductionUnit } from '../../../../../stores/create-company'

const ProductionUnits = () => {
    const store = useStore($CreateCompany)
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        if (store.production_units.length === 0) {
            $CreateCompany.setKey('production_units', [
                {
                    unit_number: '',
                    primary_location: 'true',
                    address: {
                        street_name: '',
                        street_number: '',
                        apartment: '',
                        postal_code: '',
                        city: '',
                        country: 'denmark'
                    }
                }
            ])
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
        removeProductionUnit(index)
        setIndex((index) => index - 1)
    }

    return (
        <>
            <div className="flex flex-col items-center g-8">
                <h4>Produktionsenhed {index + 1}</h4>
                {index !== 0 && <button onClick={remove}>Slet</button>}
                <div className="grid g-8">
                    <Input
                        column="1 / 3"
                        row="1"
                        name="unit_number"
                        label="P-nummer"
                        value={store.production_units[index]?.unit_number || ''}
                        onInput={(event) => {
                            $CreateCompany.setKey(`production_units[${index}].unit_number`, event.currentTarget.value)
                        }}
                    />
                    <Input
                        column="3 / 5"
                        row="1"
                        name="street_name"
                        label="Gadenavn"
                        value={store.production_units[index]?.address?.street_name || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            street_name: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="1 / 2"
                        row="2"
                        name="street_number"
                        label="Husnr."
                        value={store.production_units[index]?.address?.street_number || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            street_number: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="2 / 3"
                        row="2"
                        name="apartment"
                        label="Lejlighed"
                        value={store.production_units[index]?.address?.apartment || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            apartment: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="3 / 5"
                        row="2"
                        name="postal_code"
                        label="Postnr."
                        value={store.production_units[index]?.address?.postal_code || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            postal_code: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    />
                    <Input
                        column="1 / 3"
                        row="3"
                        name="city"
                        label="By"
                        value={store.production_units[index]?.address?.city || ''}
                        onInput={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            city: (event.target as HTMLInputElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    />
                    <Select
                        column="3 / 5"
                        row="3"
                        name="country"
                        label="Land"
                        value={store.production_units[index]?.address?.country || ''}
                        onChange={(event) => {
                            $CreateCompany.set({
                                ...$CreateCompany.get(),
                                production_units: [
                                    ...$CreateCompany.get().production_units.slice(0, index),
                                    {
                                        ...$CreateCompany.get().production_units[index],
                                        address: {
                                            ...$CreateCompany.get().production_units[index].address,
                                            country: (event.target as HTMLSelectElement).value
                                        }
                                    },
                                    ...$CreateCompany.get().production_units.slice(index + 1)
                                ]
                            })
                        }}
                    >
                        <option value="denmark">Danmark</option>
                    </Select>
                </div>
            </div>

            <div role="progressbar" className="stepper flex g-4">
                <For each={store.production_units}>
                    {(_: any, i: any) => (
                        <button
                            data-active={index === i()}
                            onClick={() => setIndex(i)}
                            className="shadow rounded-full w-8 h-8"
                        >
                            {i() + 1}
                        </button>
                    )}
                </For>

                <button className="shadow rounded-full w-8 h-8" onClick={add}>
                    +
                </button>
            </div>
        </>
    )
}

export default ProductionUnits
