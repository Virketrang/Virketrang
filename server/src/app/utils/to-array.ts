export default function toArray(value: string): string[] {
    if (!value.includes(',')) return [value.trim()]
    return value.split(',')
}
