import { isNumericString } from '../../..'

const convertFontLineHeightToCSSValue = (value: string | number): number => {
    switch (value) {
        case 'font-lineheight-0':
            return 0.95
        case 'font-lineheight-1':
            return 1.1
        case 'font-lineheight-2':
            return 1.25
        case 'font-lineheight-3':
            return 1.375
        case 'font-lineheight-4':
            return 1.5
        case 'font-lineheight-5':
            return 1.75
        case 'font-lineheight-6':
            return 2.0
        default:
            break
    }

    if (typeof value === 'number') return value

    if (isNumericString(value)) return parseInt(value)

    return 1.5
}

export default convertFontLineHeightToCSSValue
