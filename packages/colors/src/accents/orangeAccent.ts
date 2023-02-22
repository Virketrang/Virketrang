import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class OrangeAccent {
    public get 100(): HEX {
        return '#FFD180';
    }

    public get 400(): HEX {
        return '#FF9100';
    }

    public get 700(): HEX {
        return '#FF6D00';
    }

    public get default(): HEX {
        return '#FFAB40';
    }
}

export default new OrangeAccent();
