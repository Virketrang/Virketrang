import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Amber {
    public get 50(): HEX {
        return '#FFF8E1';
    }

    public get 100(): HEX {
        return '#FFECB3';
    }

    public get 200(): HEX {
        return '#FFE082';
    }

    public get 300(): HEX {
        return '#FFD54F';
    }

    public get 400(): HEX {
        return '#FFCA28';
    }

    public get 500(): HEX {
        return '#FFC107';
    }

    public get 600(): HEX {
        return '#FFB300';
    }

    public get 700(): HEX {
        return '#FFA000';
    }

    public get 800(): HEX {
        return '#FF8F00';
    }

    public get 900(): HEX {
        return '#FF6F00';
    }
}

export default new Amber();
