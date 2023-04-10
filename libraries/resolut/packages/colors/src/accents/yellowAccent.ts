import { HEX } from '../types/hex';

abstract class YellowAccent {
    public static get 100(): HEX {
        return '#FFFF8D';
    }

    public static get 400(): HEX {
        return '#FFEA00';
    }

    public static get 700(): HEX {
        return '#FFD600';
    }

    public static get default(): HEX {
        return '#FFD600';
    }
}

export default YellowAccent;
