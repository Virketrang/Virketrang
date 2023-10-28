const setInlineStyles = (styles: React.CSSProperties): React.CSSProperties => {
    const s = styles

    Object.keys(s).forEach((key) => {
        const k = key as keyof React.CSSProperties
        if (s[k] === undefined) {
            delete s[k]
        }
    })

    return s
}

export default setInlineStyles
