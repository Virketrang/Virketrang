import { createResource } from 'solid-js'

const getRoles = async () => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/roles`, { credentials: 'include' })
        const data = await response.json()

        console.log(data)

        return data.body || []
    } catch (error) {
        console.error(error)

        return []
    }
}

const [rolesResource, rolesActions] = createResource<Entity.Role[]>(getRoles, { initialValue: [] })

export { rolesResource, rolesActions }
