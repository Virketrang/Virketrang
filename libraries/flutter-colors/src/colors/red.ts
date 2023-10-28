import { HEX } from '../types/hex';

abstract class Red {
    public static get 50(): HEX {
        return '#FFEBEE';
    }

    public static get 100(): HEX {
        return '#FFCDD2';
    }

    public static get 200(): HEX {
        return '#EF9A9A';
    }

    public static get 300(): HEX {
        return '#E57373';
    }

    public static get 400(): HEX {
        return '#EF5350';
    }

    public static get 500(): HEX {
        return '#F44336';
    }

    public static get 600(): HEX {
        return '#E53935';
    }

    public static get 700(): HEX {
        return '#D32F2F';
    }

    public static get 800(): HEX {
        return '#C62828';
    }

    public static get 900(): HEX {
        return '#B71C1C';
    }
}

export default Red;
