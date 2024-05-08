import { map } from 'nanostores'

const $CreateRole = map<Entity.Role.Create>({
    title: '',
    description: '',
    permissions: []
})

export default $CreateRole
