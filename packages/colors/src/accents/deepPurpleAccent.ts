import { HEX } from '../types/hex';

abstract class DeepPurpleAccent {
    public static get 100(): HEX {
        return '#B388FF';
    }

    public static get 400(): HEX {
        return '#651FFF';
    }

    public static get 700(): HEX {
        return '#6200EA';
    }

    public static get default(): HEX {
        return '#7C4DFF';
    }
}

export default DeepPurpleAccent;
