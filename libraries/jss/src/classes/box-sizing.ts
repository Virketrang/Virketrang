import { GlobalValues } from '../utils';

export default abstract class BoxSizing extends GlobalValues {
    public static get borderBox() {
        return 'border-box';
    }

    public static get contentBox() {
        return 'content-box';
    }
}
