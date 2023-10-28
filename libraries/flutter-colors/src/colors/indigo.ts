import { HEX } from '../types/hex';

abstract class Indigo {
    public static get 50(): HEX {
        return '#E8EAF6';
    }

    public static get 100(): HEX {
        return '#C5CAE9';
    }

    public static get 200(): HEX {
        return '#9FA8DA';
    }

    public static get 300(): HEX {
        return '#7986CB';
    }

    public static get 400(): HEX {
        return '#5C6BC0';
    }

    public static get 500(): HEX {
        return '#3F51B5';
    }

    public static get 600(): HEX {
        return '#3949AB';
    }

    public static get 700(): HEX {
        return '#303F9F';
    }

    public static get 800(): HEX {
        return '#283593';
    }

    public static get 900(): HEX {
        return '#1A237E';
    }
}

export default Indigo;
