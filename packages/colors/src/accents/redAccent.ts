import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class RedAccent {
    public get 100(): HEX {
        return '#FF8A80';
    }

    public get 400(): HEX {
        return '#FF1744';
    }

    public get 700(): HEX {
        return '#D50000';
    }

    public get default(): HEX {
        return '#FF5252';
    }
}

export default new RedAccent();
