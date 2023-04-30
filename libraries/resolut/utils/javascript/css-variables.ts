import { camelCaseToHyphenCase, renameKey } from '.';

const CSSVariables = (values: { [key: string]: string | number }, prefix: string) => {
    let result = values;
    Object.keys(values).map(key => {
        result = renameKey(result, key, `--${prefix}-${camelCaseToHyphenCase(key)}`);
    });
    return result;
};

export default CSSVariables;
