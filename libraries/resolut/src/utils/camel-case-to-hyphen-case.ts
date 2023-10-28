const camelCaseToHyphenCase = (key: string): string => {
    var result = key.replace(/([A-Z])/g, ' $1')
    return result.split(' ').join('-').toLowerCase()
}

export default camelCaseToHyphenCase
