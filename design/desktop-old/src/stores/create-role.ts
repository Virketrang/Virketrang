const $CreateRole = new Nanostore<Entity.Role.Create>('create_role', {
    title: '',
    description: '',
    permissions: []
})

export default $CreateRole
