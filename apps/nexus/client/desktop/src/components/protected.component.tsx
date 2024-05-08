'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { $Company, $User } from '../stores'

interface Props {
    children: React.ReactNode
}

const Protected: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!$User.get()) router.push('/authentication/signin')

        if (!$Company.get() && pathname !== '/onboarding') {
            router.push('/onboarding')
        }
    })

    return children
}

export default Protected
