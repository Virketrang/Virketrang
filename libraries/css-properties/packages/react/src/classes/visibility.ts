import { GlobalValues } from '../utils';

export default abstract class Visibility extends GlobalValues {
    public static get visible() {
        return 'visible';
    }

    public static get hidden() {
        return 'hidden';
    }

    public static get collapse() {
        return 'collapse';
    }
}
