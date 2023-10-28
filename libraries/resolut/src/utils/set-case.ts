const setCase = ({
    uppercase,
    lowercase,
    capitalize
}: {
    uppercase: boolean
    lowercase: boolean
    capitalize: boolean
}) => {
    if (!uppercase && !lowercase && !capitalize) return undefined

    return `${uppercase ? 'uppercase' : ''}${lowercase ? 'lowercase' : ''}${capitalize ? 'capitalize' : ''}`
}

export default setCase
