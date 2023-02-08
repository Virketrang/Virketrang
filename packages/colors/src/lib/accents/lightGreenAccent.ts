import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class LightGreenAccent {
    public get 100(): HEX {
        return '#CCFF90';
    }

    public get 400(): HEX {
        return '#76FF03';
    }

    public get 700(): HEX {
        return '#64DD17';
    }

    public get default(): HEX {
        return '#B2FF59';
    }
}

export default new LightGreenAccent();
