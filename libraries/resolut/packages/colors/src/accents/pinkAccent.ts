import { HEX } from '../types/hex';

abstract class PinkAccent {
    public static get 100(): HEX {
        return '#FF80AB';
    }
    public static get 400(): HEX {
        return '#F50057';
    }
    public static get 700(): HEX {
        return '#C51162';
    }

    public static get default(): HEX {
        return '##FF4081';
    }
}

export default PinkAccent;
