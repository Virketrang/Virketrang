const setInlineStyles = (styles: {}): {} => {
    const s = styles

    Object.keys(s).forEach((key) => {
        const k = key as keyof {}
        if (s[k] === undefined) {
            delete s[k]
        }
    })

    return s
}

export default setInlineStyles
