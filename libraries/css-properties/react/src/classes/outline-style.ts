import { GlobalValues } from '../utils';

export default abstract class OutlineStyle extends GlobalValues {
    public static get auto() {
        return 'auto' as const;
    }

    public static get none() {
        return 'none' as const;
    }

    public static get dotted() {
        return 'dotted' as const;
    }

    public static get dashed() {
        return 'dashed' as const;
    }

    public static get solid() {
        return 'solid' as const;
    }

    public static get double() {
        return 'double' as const;
    }

    public static get groove() {
        return 'groove' as const;
    }

    public static get ridge() {
        return 'ridge' as const;
    }

    public static get inset() {
        return 'inset' as const;
    }

    public static get outside() {
        return 'outside' as const;
    }
}
