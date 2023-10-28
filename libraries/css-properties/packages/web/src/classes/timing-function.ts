import { GlobalValues } from '../utils';

export default abstract class TimingFunction extends GlobalValues {
    public static get ease() {
        return 'ease' as const;
    }

    public static get easeIn() {
        return 'ease-in' as const;
    }

    public static get easeOut() {
        return 'ease-out' as const;
    }

    public static get easeInOut() {
        return 'ease-in-out' as const;
    }

    public static get linear() {
        return 'linear' as const;
    }

    public static get stepStart() {
        return 'step-start' as const;
    }

    public static get stepEnd() {
        return 'step-end' as const;
    }
}
