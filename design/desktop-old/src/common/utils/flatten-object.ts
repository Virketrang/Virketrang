export default function flattenObject<O extends Object>(object: O) {
    const flattenedObject: { [key: string]: any } = {}

    function traverseNestedObject(object: Object) {
        Object.keys(object).forEach((key) => {
            const _key = key as keyof typeof object
            const value = object[_key]

            if (typeof value === 'object' && value !== null) {
                traverseNestedObject(value)
            } else {
                flattenedObject[_key] = value
            }
        })
    }

    traverseNestedObject(object)

    return flattenedObject as Flatten<O>
}
