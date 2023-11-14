import Utils from '.'

export default function setCursor(values: { [key: string]: boolean | undefined }): string | undefined {
    const value = Utils.setValueFromBoolean(values)
    return value === 'browserDefault' ? 'default' : value
}
