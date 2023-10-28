import { GlobalValues } from '../utils';

export default abstract class Overflow extends GlobalValues {
    public static get visible() {
        return 'visible' as const;
    }

    public static get hidden() {
        return 'hidden' as const;
    }

    public static get clip() {
        return 'clip' as const;
    }

    public static get scroll() {
        return 'scroll' as const;
    }

    public static get auto() {
        return 'auto' as const;
    }

    public static get hiddenVisible() {
        return 'hidden visible' as const;
    }
}
