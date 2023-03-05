import { GlobalValues } from '../utils';

export default abstract class JustifyContent extends GlobalValues {
    public static get center() {
        return 'center' as const;
    }

    public static get start() {
        return 'start' as const;
    }

    public static get end() {
        return 'end' as const;
    }

    public static get flexStart() {
        return 'flex-start' as const;
    }

    public static get flexEnd() {
        return 'flex-end' as const;
    }

    public static get left() {
        return 'left' as const;
    }

    public static get right() {
        return 'right' as const;
    }

    public static get normal() {
        return 'normal' as const;
    }

    public static get spaceBetween() {
        return 'space-between' as const;
    }

    public static get spaceAround() {
        return 'space-around' as const;
    }

    public static get spaceEvenly() {
        return 'space-evenly' as const;
    }

    public static get stretch() {
        return 'stretch' as const;
    }

    public static get safeCenter() {
        return 'saf-center' as const;
    }

    public static get unsafeCenter() {
        return 'unsafe-center' as const;
    }
}
