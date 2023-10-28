import { $CreateCompany } from '@/nexus/client/stores'

const Name = memo(() => {
    const createCompany = useStore($CreateCompany.store)

    return (
        <>
            {createCompany.owners.map((owner, index) => (
                <div key={`name-field-${index}`} style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <Field>
                        <Label htmlFor={`firstname-${index}`}>Fornavn</Label>
                        <Input
                            value={createCompany.owners[index]?.firstname || ''}
                            onChange={(event) =>
                                $CreateCompany.store.set({
                                    ...createCompany,
                                    owners: createCompany.owners.map((entry, i) => {
                                        if (i === index) {
                                            return { ...entry, firstname: event.target.value }
                                        }
                                        return entry
                                    })
                                })
                            }
                            name={`firstname-${index}`}
                        />
                    </Field>
                    <Field>
                        <Label htmlFor={`surname-${index}`}>Fornavn</Label>
                        <Input
                            value={createCompany.owners[index]?.surname || ''}
                            onChange={(event) =>
                                $CreateCompany.store.set({
                                    ...createCompany,
                                    owners: createCompany.owners.map((entry, i) => {
                                        if (i === index) {
                                            return { ...entry, surname: event.target.value }
                                        }
                                        return entry
                                    })
                                })
                            }
                            name={`surname-${index}`}
                        />
                    </Field>
                </div>
            ))}
        </>
    )
})

export default Name
