export { default as setAttributes } from './set-attributes'
export { default as setClasses } from './set-classes'
export { default as setCase } from './set-case'
export { default as setGrid } from './set-grid'
export { default as setCSSVariables } from './set-variables'
export { default as setInlineStyles } from './set-inline-styles'
export { default as setFlexDirection } from './set-flex-direction'
export { default as camelCaseToHyphenCase } from './camel-case-to-hyphen-case'
export { default as setTextWrap } from './set-text-wrap'

import setAttributes from './set-attributes'
import setClasses from './set-classes'
import setCase from './set-case'
import setGrid from './set-grid'
import setCSSVariables from './set-variables'
import setInlineStyles from './set-inline-styles'
import setFlexDirection from './set-flex-direction'
import camelCaseToHyphenCase from './camel-case-to-hyphen-case'
import setTextWrap from './set-text-wrap'

export default abstract class Utils {
    public static setAttributes = setAttributes
    public static setClasses = setClasses
    public static setCase = setCase
    public static setGrid = setGrid
    public static setCSSVariables = setCSSVariables
    public static setInlineStyles = setInlineStyles
    public static setFlexDirection = setFlexDirection
    public static camelCaseToHyphenCase = camelCaseToHyphenCase
    public static setTextWrap = setTextWrap
}
