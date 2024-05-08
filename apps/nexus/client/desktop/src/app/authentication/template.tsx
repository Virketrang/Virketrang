import { Logo } from '../../components'

interface Props {
    greeting: string
    children: React.ReactNode
    back: string
}

const AuthTemplate: React.FC<Props> = ({ greeting, children, back }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-12 mb-16">
                <Logo />
                <h2 className="font-normal">{greeting}</h2>
            </div>
            {children}
            <a href={back} className="mt-8 underline">
                Tilbage
            </a>
        </>
    )
}

export default AuthTemplate
