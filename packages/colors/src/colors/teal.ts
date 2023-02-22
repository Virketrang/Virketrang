import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Teal {
    public get 50(): HEX {
        return '#E0F2F1';
    }

    public get 100(): HEX {
        return '#B2DFDB';
    }

    public get 200(): HEX {
        return '#80CBC4';
    }

    public get 300(): HEX {
        return '#4DB6AC';
    }

    public get 400(): HEX {
        return '#26A69A';
    }

    public get 500(): HEX {
        return '#009688';
    }

    public get 600(): HEX {
        return '#00897B';
    }

    public get 700(): HEX {
        return '#00796B';
    }

    public get 800(): HEX {
        return '#00695C';
    }

    public get 900(): HEX {
        return '#004D40';
    }
}

export default new Teal();
