export default function toBoolean(value: string): boolean {
    value = value.toLowerCase()

    return value === 'true' || value === '1' ? true : false
}
