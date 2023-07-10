'use client'
type ErrorPage = FunctionComponent<{ error: Error; reset: () => void }>

const Error: ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h4>Noget gik galt!</h4>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Prøv igen</button>
        </div>
    )
}

export default Error
