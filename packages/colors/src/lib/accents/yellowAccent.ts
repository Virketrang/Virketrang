import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class YellowAccent {
    public get 100(): HEX {
        return '#FFFF8D';
    }

    public get 400(): HEX {
        return '#FFEA00';
    }

    public get 700(): HEX {
        return '#FFD600';
    }

    public get default(): HEX {
        return '#FFD600';
    }
}

export default new YellowAccent();
