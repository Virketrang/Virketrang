import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class BlueGrey {
    public get 50(): HEX {
        return '#ECEFF1';
    }

    public get 100(): HEX {
        return '#CFD8DC';
    }

    public get 200(): HEX {
        return '#B0BEC5';
    }

    public get 300(): HEX {
        return '#90A4AE';
    }

    public get 400(): HEX {
        return '#78909C';
    }

    public get 500(): HEX {
        return '#607D8B';
    }

    public get 600(): HEX {
        return '#546E7A';
    }

    public get 700(): HEX {
        return '#455A64';
    }

    public get 800(): HEX {
        return '#37474F';
    }

    public get 900(): HEX {
        return '#263238';
    }
}

export default new BlueGrey();
