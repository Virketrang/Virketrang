import { HEX } from '../types/hex';

abstract class Teal {
    public static get 50(): HEX {
        return '#E0F2F1';
    }

    public static get 100(): HEX {
        return '#B2DFDB';
    }

    public static get 200(): HEX {
        return '#80CBC4';
    }

    public static get 300(): HEX {
        return '#4DB6AC';
    }

    public static get 400(): HEX {
        return '#26A69A';
    }

    public static get 500(): HEX {
        return '#009688';
    }

    public static get 600(): HEX {
        return '#00897B';
    }

    public static get 700(): HEX {
        return '#00796B';
    }

    public static get 800(): HEX {
        return '#00695C';
    }

    public static get 900(): HEX {
        return '#004D40';
    }
}

export default Teal;
