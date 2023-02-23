import { HEX } from '../types/hex';

abstract class CyanAccent {
    public static get 100(): HEX {
        return '#84FFFF';
    }

    public static get 400(): HEX {
        return '#00E5FF';
    }

    public static get 700(): HEX {
        return '#00B8D4';
    }

    public static get default(): HEX {
        return '#18FFFF';
    }
}

export default CyanAccent;
