import { GlobalValues } from '../utils';

export default abstract class Resize extends GlobalValues {
    public static get none() {
        return 'none' as const;
    }

    public static get both() {
        return 'both' as const;
    }

    public static get horizontal() {
        return 'horizontal' as const;
    }

    public static get vertical() {
        return 'vertical' as const;
    }

    public static get block() {
        return 'block' as const;
    }

    public static get inline() {
        return 'inline' as const;
    }
}
