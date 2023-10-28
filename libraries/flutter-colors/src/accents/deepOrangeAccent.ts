import { HEX } from '../types/hex';

abstract class DeepOrangeAccent {
    public static get 100(): HEX {
        return '#FF9E80';
    }

    public static get 400(): HEX {
        return '#FF3D00';
    }

    public static get 700(): HEX {
        return '#DD2C00';
    }

    public static get default(): HEX {
        return '#FF6E40';
    }
}

export default DeepOrangeAccent;
