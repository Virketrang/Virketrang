import { HEX } from '../types/hex';

abstract class LimeAccent {
    public static get 100(): HEX {
        return '#F4FF81';
    }

    public static get 400(): HEX {
        return '#C6FF00';
    }

    public static get 700(): HEX {
        return '#AEEA00';
    }

    public static get default(): HEX {
        return '#EEFF41';
    }
}

export default LimeAccent;
