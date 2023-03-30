import { HEX } from '../types/hex';

abstract class Orange {
    public static get 50(): HEX {
        return '#FFF3E0';
    }

    public static get 100(): HEX {
        return '#FFE0B2';
    }

    public static get 200(): HEX {
        return '#FFCC80';
    }

    public static get 300(): HEX {
        return '#FFB74D';
    }

    public static get 400(): HEX {
        return '#FFA726';
    }

    public static get 500(): HEX {
        return '#FF9800';
    }

    public static get 600(): HEX {
        return '#FB8C00';
    }

    public static get 700(): HEX {
        return '#F57C00';
    }

    public static get 800(): HEX {
        return '#EF6C00';
    }

    public static get 900(): HEX {
        return '#E65100';
    }
}

export default Orange;
