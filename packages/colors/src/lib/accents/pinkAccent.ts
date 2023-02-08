import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class PinkAccent {
    public get 100(): HEX {
        return '#FF80AB';
    }
    public get 400(): HEX {
        return '#F50057';
    }
    public get 700(): HEX {
        return '#C51162';
    }

    public get default(): HEX {
        return '##FF4081';
    }
}

export default new PinkAccent();
