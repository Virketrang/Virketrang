import { HEX } from '../types/hex';

abstract class OrangeAccent {
    public static get 100(): HEX {
        return '#FFD180';
    }

    public static get 400(): HEX {
        return '#FF9100';
    }

    public static get 700(): HEX {
        return '#FF6D00';
    }

    public static get default(): HEX {
        return '#FFAB40';
    }
}

export default OrangeAccent;
