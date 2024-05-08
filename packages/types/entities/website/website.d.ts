interface Website extends Entity.BaseEntity {
    name: string
    domain: string
    content: Entity.Content[]
    content_types: Entity.ContentType[]
    published: boolean
}

declare namespace Website {
    type Create = Omit<Website, keyof Entity.BaseEntity>

    type Update = Partial<Create>
}

export default Website
