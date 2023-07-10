type Success<T> = { status: 'success'; body: T[] }
type Failure = { status: 'failure'; message: string; code: number }
type Error = { status: 'error'; message: string; code: number }

declare namespace Http {
    type Response<T> = Promise<Success<T> | Failure | Error>
}

export default Http
