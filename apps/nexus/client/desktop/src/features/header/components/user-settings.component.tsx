import { useState } from 'react'
import { $Company, $User } from '../../../stores'
import { useStore } from '@nanostores/react'
import { useRouter } from 'next/navigation'

const UserSettings = () => {
    const [open, setOpen] = useState(false)
    const store = useStore($User)
    const router = useRouter()

    const logout = () => {
        $Company.set(undefined)

        router.push('/')
    }

    return (
        <>
            <button className="relative" onClick={() => setOpen(!open)}>
                <span className="font-medium grid place-items-center text-sm rounded-full w-7 h-7 text-secondary bg-[#1e2227]">
                    {store?.profile.firstname.charAt(0).toUpperCase()}
                </span>
                {open && (
                    <div className="absolute top-11 bg-primary w-48 px-4 py-2 rounded shadow" id="menu">
                        <div className="flex gap-4">
                            <svg
                                fill="#000"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path d="M224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-510.77Q160-763 178.5-781.5 197-800 224.615-800h256.154v40H224.615q-9.23 0-16.923 7.692Q200-744.615 200-735.385v510.77q0 9.23 7.692 16.923Q215.385-200 224.615-200h256.154v40H224.615Zm433.846-178.461-28.077-28.77L723.154-460H367.692v-40h355.462l-92.77-92.769 28.077-28.77L800-480 658.461-338.461Z" />
                            </svg>
                            <button onClick={logout}>Log ud</button>
                        </div>
                    </div>
                )}
            </button>
        </>
    )
}

export default UserSettings
