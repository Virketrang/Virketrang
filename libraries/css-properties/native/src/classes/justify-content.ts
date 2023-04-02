export default abstract class JustifyContent {
    public static get center() {
        return 'center' as const;
    }

    public static get flexStart() {
        return 'flex-start' as const;
    }

    public static get flexEnd() {
        return 'flex-end' as const;
    }

    public static get spaceAround() {
        return 'space-around' as const;
    }

    public static get spaceBetween() {
        return 'space-between' as const;
    }

    public static get spaceEvenly() {
        return 'space-evenly' as const;
    }
}
