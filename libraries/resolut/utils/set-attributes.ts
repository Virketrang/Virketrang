import Utils from '.'

export interface Attributes {
    [key: `data-${string}`]: string | number | boolean | undefined
}

const setAttributes = (arg: { [key: string]: string | number | boolean | undefined }): Attributes => {
    let attributes = {}

    Object.keys(arg).forEach((key) => {
        if (arg[key] === undefined) return
        Object.defineProperty(attributes, `data-${Utils.camelCaseToHyphenCase(key)}`, {
            value: arg[key],
            enumerable: true
        })
    })

    return attributes
}

export default setAttributes
