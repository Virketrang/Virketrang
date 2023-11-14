export { default as setAttributes } from './set-attributes'
export { default as setClasses } from './set-classes'
export { default as setGrid } from './set-grid'
export { default as setCSSVariables } from './set-variables'
export { default as setInlineStyles } from './set-inline-styles'
export { default as setFlexDirection } from './set-flex-direction'
export { default as camelCaseToHyphenCase } from './camel-case-to-hyphen-case'
export { default as setValueFromBoolean } from './set-value-from-boolean'
export { default as setFontWeight } from './set-font-weight'
export { default as setTextDecoration } from './set-text-decoration'
export { default as setHeadingElementFromVariant } from './set-heading-element-from-variant'
export { default as setCursor } from './set-cursor'
export { default as setJustifyContent } from './set-justify-content'
export { default as setAlignItems } from './set-align-items'

import setAttributes from './set-attributes'
import setClasses from './set-classes'
import setGrid from './set-grid'
import setCSSVariables from './set-variables'
import setInlineStyles from './set-inline-styles'
import setFlexDirection from './set-flex-direction'
import camelCaseToHyphenCase from './camel-case-to-hyphen-case'
import setValueFromBoolean from './set-value-from-boolean'
import setFontWeight from './set-font-weight'
import setTextDecoration from './set-text-decoration'
import setHeadingElementFromVariant from './set-heading-element-from-variant'
import setCursor from './set-cursor'
import setJustifyContent from './set-justify-content'
import setAlignItems from './set-align-items'

export default abstract class Utils {
    public static setAttributes = setAttributes
    public static setClasses = setClasses
    public static setGrid = setGrid
    public static setCSSVariables = setCSSVariables
    public static setInlineStyles = setInlineStyles
    public static setFlexDirection = setFlexDirection
    public static camelCaseToHyphenCase = camelCaseToHyphenCase
    public static setValueFromBoolean = setValueFromBoolean
    public static setFontWeight = setFontWeight
    public static setTextDecoration = setTextDecoration
    public static setHeadingElementFromVariant = setHeadingElementFromVariant
    public static setCursor = setCursor
    public static setJustifyContent = setJustifyContent
    public static setAlignItems = setAlignItems
}
