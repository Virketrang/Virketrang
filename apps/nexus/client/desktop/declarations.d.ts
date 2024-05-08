import type _Nanostore from 'nanostores'
import type _Atom from 'nanostores/atom'
import type { Metadata as _Metadata } from 'next'

declare global {
    type FlattenPairs<T> = {
        [K in keyof T]: T[K] extends string | number | boolean ? [K, T[K]] : FlattenPairs<T[K]>
    }[keyof T] &
        [PropertyKey, string | number | boolean]

    type Flatten<T> = { [P in FlattenPairs<T> as P[0]]: P[1] }

    export import Nanostore = _Nanostore
    export import Atom = _Atom

    namespace Next {
        export type Metadata = _Metadata
    }
}

export {}
