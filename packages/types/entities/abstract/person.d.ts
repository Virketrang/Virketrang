interface Person extends Entity.BaseEntity {
    profile: Entity.Profile
    contact_info: Entity.ContactInfo
}

declare namespace Person {
    interface Create {
        profile: Entity.Profile.Create
        contact_info: Entity.ContactInfo.Create
    }

    interface Insert {
        profile_id: string
        contact_info_id: string
    }
}

export default Person
