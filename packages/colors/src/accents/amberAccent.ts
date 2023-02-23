import { HEX } from '../types/hex';

abstract class AmberAccent {
    public static get 100(): HEX {
        return '#FFE57F';
    }

    public static get 400(): HEX {
        return '#FFC400';
    }

    public static get 700(): HEX {
        return '#FFAB00';
    }

    public static get default(): HEX {
        return '#FFD740';
    }
}

export default AmberAccent;
