import { GlobalValues } from '../utils';

export default abstract class Position extends GlobalValues {
    public static get static() {
        return 'static' as const;
    }

    public static get relative() {
        return 'relative' as const;
    }

    public static get absolute() {
        return 'absolute' as const;
    }

    public static get sticky() {
        return 'sticky' as const;
    }

    public static get fixed() {
        return 'fixed' as const;
    }
}
