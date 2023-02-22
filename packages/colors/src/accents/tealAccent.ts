import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class TealAccent {
    public get 100(): HEX {
        return '#A7FFEB';
    }

    public get 400(): HEX {
        return '#1DE9B6';
    }

    public get 700(): HEX {
        return '#00BFA5';
    }

    public get default(): HEX {
        return '#64FFDA';
    }
}

export default new TealAccent();
