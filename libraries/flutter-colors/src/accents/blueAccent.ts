import { HEX } from '../types/hex';

abstract class BlueAccent {
    public static get 100(): HEX {
        return '#82B1FF';
    }

    public static get 400(): HEX {
        return '#2979FF';
    }

    public static get 700(): HEX {
        return '#2962FF';
    }

    public static get default(): HEX {
        return '#448AFF';
    }
}

export default BlueAccent;
