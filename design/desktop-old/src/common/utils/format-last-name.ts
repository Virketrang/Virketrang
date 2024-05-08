export default function formatLastname(lastname: string): string {
    const lastnameAsArray = lastname.split(' ')
    const wordCount = lastnameAsArray.length

    return lastnameAsArray
        .map((word, index) => {
            if (index + 1 === wordCount) {
                return word
            }

            return word.charAt(0) + '.'
        })
        .join(' ')
}
