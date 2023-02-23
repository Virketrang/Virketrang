import { HEX } from '../types/hex';

abstract class Cyan {
    public static get 50(): HEX {
        return '#E0F7FA';
    }

    public static get 100(): HEX {
        return '#B2EBF2';
    }

    public static get 200(): HEX {
        return '#80DEEA';
    }

    public static get 300(): HEX {
        return '#4DD0E1';
    }

    public static get 400(): HEX {
        return '#26C6DA';
    }

    public static get 500(): HEX {
        return '#00BCD4';
    }

    public static get 600(): HEX {
        return '#00ACC1';
    }

    public static get 700(): HEX {
        return '#0097A7';
    }

    public static get 800(): HEX {
        return '#00838F';
    }

    public static get 900(): HEX {
        return '#006064';
    }
}

export default Cyan;
