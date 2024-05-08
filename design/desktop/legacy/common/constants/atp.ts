abstract class Rates {
    public static get above117() {
        return 284
    }

    public static get between78and117() {
        return 189.35
    }

    public static get between39and78() {
        return 94.65
    }

    public static get below39() {
        return 0
    }
}

abstract class Employer {}

abstract class Employee {}

export default abstract class ATP {
    public static get employer() {
        return Employer
    }

    public static get employee() {
        return Employee
    }
}
