'use client'
interface Props {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: Props) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <p>Noget gik galt!</p>
            <button onClick={() => reset()}>Noget gik galt</button>
        </div>
    )
}
