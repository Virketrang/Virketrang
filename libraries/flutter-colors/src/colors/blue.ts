import { HEX } from '../types/hex';

abstract class Blue {
    public static get 50(): HEX {
        return '#E3F2FD';
    }

    public static get 100(): HEX {
        return '#BBDEFB';
    }

    public static get 200(): HEX {
        return '#90CAF9';
    }

    public static get 300(): HEX {
        return '#64B5F6';
    }

    public static get 400(): HEX {
        return '#42A5F5';
    }

    public static get 500(): HEX {
        return '#2196F3';
    }

    public static get 600(): HEX {
        return '#1E88E5';
    }

    public static get 700(): HEX {
        return '#1976D2';
    }

    public static get 800(): HEX {
        return '#1565C0';
    }

    public static get 900(): HEX {
        return '#0D47A1';
    }
}

export default Blue;
