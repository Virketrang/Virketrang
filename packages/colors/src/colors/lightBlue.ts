import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class LightBlue {
    public get 50(): HEX {
        return '#E1F5FE';
    }

    public get 100(): HEX {
        return '#B3E5FC';
    }

    public get 200(): HEX {
        return '#81D4FA';
    }

    public get 300(): HEX {
        return '#4FC3F7';
    }

    public get 400(): HEX {
        return '#29B6F6';
    }

    public get 500(): HEX {
        return '#03A9F4';
    }

    public get 600(): HEX {
        return '#039BE5';
    }

    public get 700(): HEX {
        return '#0288D1';
    }

    public get 800(): HEX {
        return '#0277BD';
    }

    public get 900(): HEX {
        return '#01579B';
    }
}

export default new LightBlue();
