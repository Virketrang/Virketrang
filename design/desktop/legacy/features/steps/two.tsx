import { Textarea } from '@/nexus/components'

type Props = { state: string; setState: React.Dispatch<React.SetStateAction<string>> }

const Two: React.FunctionComponent<Props> = memo(({ state, setState }) => {
    return (
        <>
            <Textarea
                value={state}
                onChange={(event) => {
                    setState(event.target.value)
                }}
                placeholder="Lang beskrivelse"
            />
        </>
    )
})

Two.displayName = Two.name

export default Two
