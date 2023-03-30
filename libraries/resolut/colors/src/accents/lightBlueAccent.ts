import { HEX } from '../types/hex';

abstract class LightBlueAccent {
    public static get 100(): HEX {
        return '#80D8FF';
    }

    public static get 400(): HEX {
        return '#00B0FF';
    }

    public static get 700(): HEX {
        return '#0091EA';
    }

    public static get default(): HEX {
        return '#40C4FF';
    }
}

export default LightBlueAccent;
