export default abstract class AlignItems {
    public static get center() {
        return 'center' as const;
    }

    public static get auto() {
        return 'auto' as const;
    }

    public static get left() {
        return 'left' as const;
    }

    public static get right() {
        return 'right' as const;
    }

    public static get justify() {
        return 'justify' as const;
    }
}
