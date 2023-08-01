export default function toArray(value: string): string[] {
    console.log(value)
    if (!value.includes(',')) return [value.trim()]
    return value.split(',')
}
