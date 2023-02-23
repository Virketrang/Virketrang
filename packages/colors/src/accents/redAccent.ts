import { HEX } from '../types/hex';

abstract class RedAccent {
    public static get 100(): HEX {
        return '#FF8A80';
    }

    public static get 400(): HEX {
        return '#FF1744';
    }

    public static get 700(): HEX {
        return '#D50000';
    }

    public static get default(): HEX {
        return '#FF5252';
    }
}

export default RedAccent;
