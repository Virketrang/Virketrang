import { HEX } from '../types/hex';

abstract class GreenAccent {
    public static get 100(): HEX {
        return '#B9F6CA';
    }

    public static get 400(): HEX {
        return '#00E676';
    }

    public static get 700(): HEX {
        return '#00C853';
    }

    public static get default(): HEX {
        return '#69F0AE';
    }
}

export default GreenAccent;
