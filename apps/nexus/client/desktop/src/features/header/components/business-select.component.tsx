import { useState } from 'react'
import { $Company, $Companies } from '../../../stores'
import { useStore } from '@nanostores/react'

const BusinessSelect = () => {
    const store = useStore($Company)
    const companies = useStore($Companies)
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                role="combobox"
                onClick={() => setOpen(!open)}
                className="flex items-center cursor-pointer relative gap-2 text-secondary fill-secondary font-medium"
            >
                {!!store && <span className="font-bold">{(store as Entity.Company).company_name}</span>}
                <button>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M480-371.923 267.692-584.231 296-612.539l184 184 184-184 28.308 28.308L480-371.923Z" />
                    </svg>
                </button>
                {open && (
                    <div className="shadow text-primary bg-primary position-absolute top-11 w-48 py-2 px-4 rounded">
                        {companies?.map((company) => (
                            <button
                                className="flex gap-4"
                                onClick={() => {
                                    $Company.set(company)
                                    document.cookie = `nexus_company=${company.id}; Path=/; SameSite=Lax;`
                                }}
                            >
                                <h4
                                    className="rounded grid place-items-center font-medium w-8 h-8 text-secondary"
                                    style={{ background: Utils.stringToColour(company.company_name) }}
                                >
                                    {company.company_name.charAt(0).toUpperCase()}
                                </h4>
                                <span>{company.company_name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default BusinessSelect
