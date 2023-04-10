export default abstract class FontWeight {
    public static get thin() {
        return '100' as const;
    }

    public static get extraLight() {
        return '200' as const;
    }

    public static get light() {
        return '300' as const;
    }

    public static get regular() {
        return '400' as const;
    }

    public static get medium() {
        return '500' as const;
    }

    public static get semiBold() {
        return '600' as const;
    }

    public static get bold() {
        return '700' as const;
    }

    public static get extraBold() {
        return '800' as const;
    }

    public static get black() {
        return '900' as const;
    }

    public static get normal() {
        return 'normal' as const;
    }
}
