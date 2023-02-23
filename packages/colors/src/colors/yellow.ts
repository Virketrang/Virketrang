import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Yellow {
    public get 50(): HEX {
        return '#FFFDE7';
    }

    public get 100(): HEX {
        return '#FFF9C4';
    }

    public get 200(): HEX {
        return '#FFF59D';
    }

    public get 300(): HEX {
        return '#FFF176';
    }

    public get 400(): HEX {
        return '#FFEE58';
    }

    public get 500(): HEX {
        return '#FFEB3B';
    }

    public get 600(): HEX {
        return '#FDD835';
    }

    public get 700(): HEX {
        return '#FBC02D';
    }

    public get 800(): HEX {
        return '#F9A825';
    }

    public get 900(): HEX {
        return '#F57F17';
    }
}

export default new Yellow();
