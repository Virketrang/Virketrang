interface ToNumberOptions {
    default?: number
    min?: number
    max?: number
}

export default function toNumber(value: string, opts: ToNumberOptions = {}): number {
    console.log(value)
    if (typeof value === 'undefined' || value === null) return opts.default || 0

    if (Number.isNaN(value)) return opts.default || 0

    const number = Number.parseInt(value, 10)

    if (opts.min) {
        if (number < opts.min) return opts.min
    }

    if (opts.max) {
        if (number > opts.max) return opts.max
    }

    return number
}
