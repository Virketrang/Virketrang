const setTextWrap = ({
    wrap,
    nowrap,
    balance
}: {
    wrap: Resolut.Primitive.Boolean
    nowrap: Resolut.Primitive.Boolean
    balance: Resolut.Primitive.Boolean
}) => {
    if (wrap) {
        return 'wrap'
    }

    if (nowrap) {
        return 'nowrap'
    }

    if (balance) {
        return 'balance'
    }

    return undefined
}

export default setTextWrap
