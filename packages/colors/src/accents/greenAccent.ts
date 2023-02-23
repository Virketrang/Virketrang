import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class GreenAccent {
    public get 100(): HEX {
        return '#B9F6CA';
    }

    public get 400(): HEX {
        return '#00E676';
    }

    public get 700(): HEX {
        return '#00C853';
    }

    public get default(): HEX {
        return '#69F0AE';
    }
}

export default new GreenAccent();
