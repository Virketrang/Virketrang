import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class LightBlueAccent {
    public get 100(): HEX {
        return '#80D8FF';
    }

    public get 400(): HEX {
        return '#00B0FF';
    }

    public get 700(): HEX {
        return '#0091EA';
    }

    public get default(): HEX {
        return '#40C4FF';
    }
}

export default new LightBlueAccent();
