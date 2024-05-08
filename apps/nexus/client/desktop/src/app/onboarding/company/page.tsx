'use client'
import { useStore } from '@nanostores/react'
import { $Companies, $Company } from '../../../stores'
import { useRouter } from 'next/navigation'
import { Utils } from '../../../common'

const Page = () => {
    const companies = useStore($Companies)
    const router = useRouter()

    return (
        <div className="mt-16">
            {companies &&
                companies.map((company) => (
                    <div
                        className="flex flex-col g-4 items-center cursor-pointer"
                        onClick={() => {
                            $Company.set(company)
                            document.cookie = `nexus_company=${company.id}; Path=/; SameSite=Lax;`
                            router.push('/dashboard')
                        }}
                    >
                        <h2
                            style={{ backgroundColor: Utils.stringToColour(company.company_name) }}
                            className="flex-center font-normal w-[200px] h-[200px] text-7xl rounded-2xl text-secondary"
                        >
                            {company.company_name.charAt(0).toUpperCase()}
                        </h2>
                        <h3 className="text-xl font-semibold">{company.company_name}</h3>
                    </div>
                ))}
        </div>
    )
}

export default Page
