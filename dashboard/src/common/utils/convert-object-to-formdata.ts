export default function convertObjectToFormData(object: object) {
    const formData = new FormData()

    Object.entries(object).forEach(([key, value]) => {
        if (typeof value === 'string') formData.append(key, value)
        if (typeof value === 'number') formData.append(key, value.toString())
        if (typeof value === 'boolean') formData.append(key, value === true ? 'true' : 'false')
        if (typeof value === 'object' || Array.isArray(value)) formData.append(key, JSON.stringify(value))
    })

    return formData
}
