import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class AmberAccent {
    public get 100(): HEX {
        return '#FFE57F';
    }

    public get 400(): HEX {
        return '#FFC400';
    }

    public get 700(): HEX {
        return '#FFAB00';
    }

    public get default(): HEX {
        return '#FFD740';
    }
}

export default new AmberAccent();
