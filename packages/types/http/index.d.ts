import _Error from './error'
import _Failure from './failure'
import _Success from './success'
import _Response from './response'

declare namespace HTTP {
    export type Error = _Error
    export type Failure = _Failure
    export type Success<T> = _Success<T>
    export type Response<T> = _Response<T>
}

export default HTTP
