interface ToNumberOptions {
    default?: number
    min?: number
    max?: number
}

export default function toNumber(value: string, opts: ToNumberOptions = {}): number {
    if (typeof value === 'undefined' || value === null) return opts.default || 0

    if (Number.isNaN(value)) return opts.default || 0

    const number = Number.parseInt(value)

    if (opts.min) {
        if (number < opts.min) return opts.min
    }

    if (opts.max) {
        if (number > opts.max) return opts.max
    }

    return number
}
