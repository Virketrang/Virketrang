import { HEX } from '../types/hex';

abstract class IndigoAccent {
    public static get 100(): HEX {
        return '#8C9EFF';
    }

    public static get 400(): HEX {
        return '#3D5AFE';
    }

    public static get 700(): HEX {
        return '#304FFE';
    }

    public static get default(): HEX {
        return '#536DFE';
    }
}

export default IndigoAccent;
