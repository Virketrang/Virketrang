import { HEX } from '../types/hex';

abstract class Brown {
    public static get 50(): HEX {
        return '#EFEBE9';
    }

    public static get 100(): HEX {
        return '#D7CCC8';
    }

    public static get 200(): HEX {
        return '#BCAAA4';
    }

    public static get 300(): HEX {
        return '#A1887F';
    }

    public static get 400(): HEX {
        return '#8D6E63';
    }

    public static get 500(): HEX {
        return '#795548';
    }

    public static get 600(): HEX {
        return '#6D4C41';
    }

    public static get 700(): HEX {
        return '#5D4037';
    }

    public static get 800(): HEX {
        return '#4E342E';
    }

    public static get 900(): HEX {
        return '#3E2723';
    }
}

export default Brown;
