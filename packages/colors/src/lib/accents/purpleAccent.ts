import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class PurpleAccent {
    public get 100(): HEX {
        return '#EA80FC';
    }

    public get 400(): HEX {
        return '#D500F9';
    }

    public get 700(): HEX {
        return '#AA00FF';
    }

    public get default(): HEX {
        return '#E040FB';
    }
}

export default new PurpleAccent();
