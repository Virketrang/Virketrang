interface Profile extends Entity.BaseEntity {
    firstname: string

    lastname: string

    fullname: string

    birthdate: Date

    gender: Enum.GENDER
}

declare namespace Profile {
    interface Create {
        firstname: string
        lastname: string
        birthdate: Date
        gender: Enum.GENDER
    }

    interface Insert {
        firstname: string
        lastname: string
        birthdate: Date
        gender: Enum.GENDER
    }

    type Update = Partial<Create>
}

export default Profile
