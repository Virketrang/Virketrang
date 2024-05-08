import type _Nanostore from 'nanostores'
import type _Atom from 'nanostores/atom'
import type _Solid from 'solid-js'
import type { JSX as _JSX } from 'solid-js'
import type _CSSAttributes from '@/types/css'

declare global {
    interface CSSAttributes extends _CSSAttributes {}

    namespace astroHTML.JSX {
        interface HTMLAttributes extends CSSAttributes {}
    }

    type FlattenPairs<T> = {
        [K in keyof T]: T[K] extends string | number | boolean ? [K, T[K]] : FlattenPairs<T[K]>
    }[keyof T] &
        [PropertyKey, string | number | boolean]

    type Flatten<T> = { [P in FlattenPairs<T> as P[0]]: P[1] }

    export import Nanostore = _Nanostore
    export import Solid = _Solid
    export import Atom = _Atom
    export import JSX = _JSX
}

declare module 'solid-js' {
    namespace JSX {
        interface HTMLAttributes<T> extends CSSAttributes {}
    }
}

export {}
