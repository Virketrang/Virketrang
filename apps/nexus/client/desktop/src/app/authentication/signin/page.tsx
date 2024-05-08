import { Input } from '../../../components'
import AuthTemplate from '../template'

export const metadata: Next.Metadata = {
    title: 'Nexus Compose - Opret bruger',
    description: 'Nexus Compose - Opret bruger'
}

const Page = () => {
    return (
        <AuthTemplate greeting="Velkommen tilbage" back="/">
            <form className="flex flex-col w-[128rem] flex-center gap-8">
                <Input label="E-mail" name="email" type="email" />
                <Input label="Adgangskode" name="password" type="password" />
                <button type="submit" className="w-full h-12 text-primary bg-primary">
                    Login
                </button>
            </form>
        </AuthTemplate>
    )
}

export default Page
