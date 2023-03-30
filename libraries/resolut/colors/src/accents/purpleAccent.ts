import { HEX } from '../types/hex';

abstract class PurpleAccent {
    public static get 100(): HEX {
        return '#EA80FC';
    }

    public static get 400(): HEX {
        return '#D500F9';
    }

    public static get 700(): HEX {
        return '#AA00FF';
    }

    public static get default(): HEX {
        return '#E040FB';
    }
}

export default PurpleAccent;
