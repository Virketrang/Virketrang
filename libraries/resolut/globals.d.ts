export {}
declare global {
    const Utils: typeof import('./src/utils')['default']
    const Enum: typeof import('./src/enums')['default']
}
