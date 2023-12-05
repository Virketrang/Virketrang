import type _Nanostore from 'nanostores'
import type _Atom from 'nanostores/atom'
import type _Solid from 'solid-js'
import type { JSX as _JSX } from 'solid-js'

declare global {
    interface CSSAttributes {
        'flex'?: boolean | string
        'flex-center'?: boolean | string
        'flex-column'?: boolean | string
        'flex-row'?: boolean | string
        'align-center'?: boolean | string
        'justify-center'?: boolean | string
        'justify-between'?: boolean | string
        'justify-around'?: boolean | string
        'justify-evenly'?: boolean | string
        'justify-start'?: boolean | string
        'justify-end'?: boolean | string
        'align-start'?: boolean | string
        'align-end'?: boolean | string

        'text-center'?: boolean | string
        'text-balance'?: boolean | string

        'font-size-075'?: boolean | string
        'font-size-1'?: boolean | string
        'font-size-2'?: boolean | string
        'font-size-3'?: boolean | string
        'font-100'?: boolean | string
        'font-200'?: boolean | string
        'font-300'?: boolean | string
        'font-400'?: boolean | string
        'font-500'?: boolean | string
        'font-600'?: boolean | string
        'font-700'?: boolean | string
        'font-800'?: boolean | string
        'font-900'?: boolean | string

        'grid'?: boolean | string

        'gap-05'?: boolean | string
        'gap-1'?: boolean | string
        'gap-2'?: boolean | string
        'gap-3'?: boolean | string
        'gap-4'?: boolean | string
        'gap-5'?: boolean | string

        'h-screen'?: boolean | string
        'min-h-screen'?: boolean | string
        'h-full'?: boolean | string
        [key: `h-${number}`]: boolean | string
        'w-full'?: boolean | string
        'w-screen'?: boolean | string
        'min-w-screen'?: boolean | string
        [key: `w-${number}`]: boolean | string

        'elevated'?: boolean | string
        'rd'?: boolean | string
        'circle'?: boolean | string
        'active'?: boolean | string

        'step'?: boolean | string
        'input-field'?: boolean | string

        'btn-primary-bg'?: boolean | string
        'btn-primary-text'?: boolean | string
        'btn-secondary-bg'?: boolean | string
        'btn-secondary-text'?: boolean | string
        'border-grey-200'?: boolean | string
        'bg-white'?: boolean | string

        'cursor-pointer'?: boolean | string

        'position-relative'?: boolean | string
        'position-absolute'?: boolean | string
        'position-fixed'?: boolean | string
        'position-sticky'?: boolean | string
        'inset-0'?: boolean | string

        'appearance-none'?: boolean | string
        'select-none'?: boolean | string

        'uppercase'?: boolean | string
        'lowercase'?: boolean | string
        'capitalize'?: boolean | string
        'underline'?: boolean | string

        'border-radius-8'?: boolean | string

        'size-2'?: boolean | string
    }

    namespace astroHTML.JSX {
        interface HTMLAttributes extends CSSAttributes {}
    }

    type Primitive = string | number | boolean

    type FlattenPairs<T> = { [K in keyof T]: T[K] extends Primitive ? [K, T[K]] : FlattenPairs<T[K]> }[keyof T] &
        [PropertyKey, Primitive]

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
