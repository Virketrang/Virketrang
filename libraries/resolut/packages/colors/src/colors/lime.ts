import { HEX } from '../types/hex';

abstract class Lime {
    public static get 50(): HEX {
        return '#F9FBE7';
    }

    public static get 100(): HEX {
        return '#F0F4C3';
    }

    public static get 200(): HEX {
        return '#E6EE9C';
    }

    public static get 300(): HEX {
        return '#DCE775';
    }

    public static get 400(): HEX {
        return '#D4E157';
    }

    public static get 500(): HEX {
        return '#CDDC39';
    }

    public static get 600(): HEX {
        return '#C0CA33';
    }

    public static get 700(): HEX {
        return '#AFB42B';
    }

    public static get 800(): HEX {
        return '#9E9D24';
    }

    public static get 900(): HEX {
        return '#827717';
    }
}

export default Lime;
