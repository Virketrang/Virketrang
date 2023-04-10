import { GlobalValues } from '../utils';

export default abstract class FlexDirection extends GlobalValues {
    public static get row() {
        return 'row' as const;
    }

    public static get rowReverse() {
        return 'row-reverse' as const;
    }

    public static get column() {
        return 'column' as const;
    }

    public static get columnReverse() {
        return 'column-reverse' as const;
    }
}
