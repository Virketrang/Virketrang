import { GlobalValues } from '../utils';

export default abstract class AlignItems extends GlobalValues {
    public static get normal() {
        return 'normal' as const;
    }

    public static get stretch() {
        return 'stretch' as const;
    }

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

    public static get baseline() {
        return 'baseline' as const;
    }

    public static get firstBaseline() {
        return 'first baseline' as const;
    }

    public static get lastBaseline() {
        return 'last baseline' as const;
    }

    public static get safeCenter() {
        return 'safe center' as const;
    }

    public static get unsafeCenter() {
        return 'unsafe center' as const;
    }
}
