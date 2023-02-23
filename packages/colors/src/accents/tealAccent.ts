import { HEX } from '../types/hex';

abstract class TealAccent {
    public static get 100(): HEX {
        return '#A7FFEB';
    }

    public static get 400(): HEX {
        return '#1DE9B6';
    }

    public static get 700(): HEX {
        return '#00BFA5';
    }

    public static get default(): HEX {
        return '#64FFDA';
    }
}

export default TealAccent;
