import { HEX } from '../types/hex';

abstract class Yellow {
    public static get 50(): HEX {
        return '#FFFDE7';
    }

    public static get 100(): HEX {
        return '#FFF9C4';
    }

    public static get 200(): HEX {
        return '#FFF59D';
    }

    public static get 300(): HEX {
        return '#FFF176';
    }

    public static get 400(): HEX {
        return '#FFEE58';
    }

    public static get 500(): HEX {
        return '#FFEB3B';
    }

    public static get 600(): HEX {
        return '#FDD835';
    }

    public static get 700(): HEX {
        return '#FBC02D';
    }

    public static get 800(): HEX {
        return '#F9A825';
    }

    public static get 900(): HEX {
        return '#F57F17';
    }
}

export default Yellow;
