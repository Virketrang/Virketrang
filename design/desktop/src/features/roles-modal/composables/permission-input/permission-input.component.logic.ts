export default abstract class PermissionInputLogic {
    public static set(store: Solid.Accessor<Entity.Role.Create>, value: Entity.Role.Create['permissions']) {
        return $CreateRole.store.set({
            title: store().title,
            description: store().description,
            permissions: value
        })
    }

    public static handleAllCheckbox(store: Solid.Accessor<Entity.Role.Create>, value: Enum.Authorization.Permission) {
        const permission = store().permissions.find((p) => p.name === value)

        if (!permission)
            return PermissionInputLogic.set(store, [
                ...store().permissions,
                {
                    name: value,
                    read: true,
                    write: true,
                    modify: true,
                    remove: true
                }
            ])

        if (
            permission.read === true &&
            permission.write === true &&
            permission.modify === true &&
            permission.remove === true
        )
            return $CreateRole.store.set({
                title: store().title,
                description: store().description,
                permissions: store().permissions.filter((p) => p.name !== value)
            })

        return $CreateRole.store.set({
            title: store().title,
            description: store().description,
            permissions: store().permissions.map((p) => {
                if (p.name === value) {
                    return {
                        ...p,
                        read: true,
                        write: true,
                        modify: true,
                        remove: true
                    }
                } else {
                    return p
                }
            })
        })
    }

    public static handleSpecificCheckbox(
        store: Solid.Accessor<Entity.Role.Create>,
        value: Enum.Authorization.Permission,
        operation: 'read' | 'write' | 'modify' | 'remove'
    ) {
        const permission = store().permissions.find((p) => p.name === value)

        if (!permission)
            return $CreateRole.store.set({
                title: store().title,
                description: store().description,
                permissions: [
                    ...store().permissions,
                    {
                        name: value,
                        read: operation === 'read',
                        write: operation === 'write',
                        modify: operation === 'modify',
                        remove: operation === 'remove'
                    }
                ]
            })

        if (permission[operation] === false) {
            return $CreateRole.store.set({
                title: store().title,
                description: store().description,
                permissions: store().permissions.map((p) => {
                    if (p.name === value) {
                        return {
                            ...p,
                            [operation]: true
                        }
                    } else {
                        return p
                    }
                })
            })
        }

        if (
            (operation === 'read' &&
                permission.write === false &&
                permission.modify === false &&
                permission.remove === false) ||
            (operation === 'write' &&
                permission.read === false &&
                permission.modify === false &&
                permission.remove === false) ||
            (operation === 'modify' &&
                permission.read === false &&
                permission.write === false &&
                permission.remove === false) ||
            (operation === 'remove' &&
                permission.read === false &&
                permission.write === false &&
                permission.modify === false)
        )
            return $CreateRole.store.set({
                title: store().title,
                description: store().description,
                permissions: store().permissions.filter((p) => p.name !== value)
            })

        return $CreateRole.store.set({
            title: store().title,
            description: store().description,
            permissions: store().permissions.map((p) => {
                if (p.name === value) {
                    return {
                        ...p,
                        [operation]: false
                    }
                } else {
                    return p
                }
            })
        })
    }
}
