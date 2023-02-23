import { HEX } from '../types/hex';

abstract class Green {
    public static get 50(): HEX {
        return '#E8F5E9';
    }

    public static get 100(): HEX {
        return '#C8E6C9';
    }

    public static get 200(): HEX {
        return '#A5D6A7';
    }

    public static get 300(): HEX {
        return '#81C784';
    }

    public static get 400(): HEX {
        return '#66BB6A';
    }

    public static get 500(): HEX {
        return '#4CAF50';
    }

    public static get 600(): HEX {
        return '#43A047';
    }

    public static get 700(): HEX {
        return '#388E3C';
    }

    public static get 800(): HEX {
        return '#2E7D32';
    }

    public static get 900(): HEX {
        return '#1B5E20';
    }
}

export default Green;
