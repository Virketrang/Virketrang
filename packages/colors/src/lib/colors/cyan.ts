import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Cyan {
    public get 50(): HEX {
        return '#E0F7FA';
    }

    public get 100(): HEX {
        return '#B2EBF2';
    }

    public get 200(): HEX {
        return '#80DEEA';
    }

    public get 300(): HEX {
        return '#4DD0E1';
    }

    public get 400(): HEX {
        return '#26C6DA';
    }

    public get 500(): HEX {
        return '#00BCD4';
    }

    public get 600(): HEX {
        return '#00ACC1';
    }

    public get 700(): HEX {
        return '#0097A7';
    }

    public get 800(): HEX {
        return '#00838F';
    }

    public get 900(): HEX {
        return '#006064';
    }
}

export default new Cyan();
