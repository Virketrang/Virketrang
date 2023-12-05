import Utils from '.'

export default function setCursor(values: { [key: string]: boolean | undefined }): string | undefined {
    const value = Utils.setValueFromBoolean(values)

    if (!value) return undefined

    return Utils.camelCaseToHyphenCase(value).replace('cursor-', '')
}
