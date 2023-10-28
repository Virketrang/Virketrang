import { numberToPixels } from '../../..'

const convertFontLetterSpacingToCSSValue = (value: string | number) => {
    switch (value) {
        case 'font-letterspacing-0':
            return '-0.05em'
        case 'font-letterspacing-1':
            return '0.025em'
        case 'font-letterspacing-2':
            return '0.050em'
        case 'font-letterspacing-3':
            return '0.075em'
        case 'font-letterspacing-4':
            return '0.150em'
        case 'font-letterspacing-5':
            return '0.500em'
        case 'font-letterspacing-6':
            return '0.750em'
        case 'font-letterspacing-7':
            return '1em'
        default:
            break
    }
    return numberToPixels(value)
}

export default convertFontLetterSpacingToCSSValue
