const setFontWeight = (fontWeight: Resolut.Attribute.Typography.FontWeight) => {
    if (fontWeight.thin) return 100
    if (fontWeight.extraLight) return 200
    if (fontWeight.light) return 300
    if (fontWeight.regular) return 400
    if (fontWeight.medium) return 500
    if (fontWeight.semiBold) return 600
    if (fontWeight.bold) return 700
    if (fontWeight.extraBold) return 800
    if (fontWeight.black) return 900
    return undefined
}

export default setFontWeight
