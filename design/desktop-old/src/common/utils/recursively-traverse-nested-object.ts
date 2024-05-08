export default function recursivelyTraverseNestedObject<O>(
    object: O,
    field: keyof Flatten<O>,
    value: Flatten<O>[keyof Flatten<O>]
) {
    function traverse(o: any, f: keyof Flatten<O>, v: Flatten<O>[keyof Flatten<O>]) {
        let result = o

        for (let key in result) {
            if (typeof result[key] === 'object' && Array.isArray(result[key]) === false) {
                traverse(result[key], f, v)
            } else {
                if (key === f) result[key] = v
            }
        }

        return result
    }

    const result = traverse(object, field, value)

    return result as O
}
