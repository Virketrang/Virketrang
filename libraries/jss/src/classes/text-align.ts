import { GlobalValues } from '../utils';

export default abstract class TextAlign extends GlobalValues {
    public static get start() {
        return 'start' as const;
    }

    public static get end() {
        return 'end' as const;
    }

    public static get left() {
        return 'left' as const;
    }

    public static get right() {
        return 'right' as const;
    }

    public static get center() {
        return 'center' as const;
    }

    public static get justify() {
        return 'justify' as const;
    }

    public static get justifyAll() {
        return 'justify-all' as const;
    }

    public static get matchParent() {
        return 'match-parent' as const;
    }
}
