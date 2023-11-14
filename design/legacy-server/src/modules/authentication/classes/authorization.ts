enum Action {
    CREATE = 'CREATE',
    READ = 'READ',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    ALL = 'ALL'
}

enum Permission {
    PRODUCT = 'PRODUCT'
}

export default abstract class Authorization {
    public static readonly Action = Action
    public static readonly Permission = Permission
}
