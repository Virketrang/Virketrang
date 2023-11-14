import Utils from '.'

export default function setValuesFromBoolean(values: { [key: string]: boolean | undefined }): string | undefined {
    let value = undefined

    Object.keys(values).map((key) => {
        if (values[key]) value = Utils.camelCaseToHyphenCase(key)
    })

    return value
}
