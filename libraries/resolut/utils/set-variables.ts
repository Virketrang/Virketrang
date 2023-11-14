import Utils from '.'

export interface CSSVariables {
    [key: `--${string}`]: string | number | undefined
}

const setCSSVariables = (arg: { [key: string]: string | number | undefined }): CSSVariables => {
    let variables = {}

    Object.keys(arg).forEach((key) => {
        Object.defineProperty(variables, `--${Utils.camelCaseToHyphenCase(key)}`, {
            value: arg[key],
            enumerable: true
        })
    })

    return variables
}

export default setCSSVariables
