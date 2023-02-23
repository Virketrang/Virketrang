import { HEX } from '../types/hex';

abstract class BlueGrey {
    public static get 50(): HEX {
        return '#ECEFF1';
    }

    public static get 100(): HEX {
        return '#CFD8DC';
    }

    public static get 200(): HEX {
        return '#B0BEC5';
    }

    public static get 300(): HEX {
        return '#90A4AE';
    }

    public static get 400(): HEX {
        return '#78909C';
    }

    public static get 500(): HEX {
        return '#607D8B';
    }

    public static get 600(): HEX {
        return '#546E7A';
    }

    public static get 700(): HEX {
        return '#455A64';
    }

    public static get 800(): HEX {
        return '#37474F';
    }

    public static get 900(): HEX {
        return '#263238';
    }
}

export default BlueGrey;
