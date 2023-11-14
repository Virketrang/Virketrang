export default function setHeadingElementFromVariant(variant?: 'heading' | 'subheading' | 'section' | 'subsection') {
    switch (variant) {
        case 'heading':
            return 'h1'
        case 'subheading':
            return 'h2'
        case 'section':
            return 'h3'
        case 'subsection':
            return 'h4'
        default:
            return 'h2'
    }
}
