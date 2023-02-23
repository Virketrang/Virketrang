import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class LimeAccent {
    public get 100(): HEX {
        return '#F4FF81';
    }

    public get 400(): HEX {
        return '#C6FF00';
    }

    public get 700(): HEX {
        return '#AEEA00';
    }

    public get default(): HEX {
        return '#EEFF41';
    }
}

export default new LimeAccent();
