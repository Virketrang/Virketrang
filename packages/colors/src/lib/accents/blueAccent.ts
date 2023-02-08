import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class BlueAccent {
    public get 100(): HEX {
        return '#82B1FF';
    }

    public get 400(): HEX {
        return '#2979FF';
    }

    public get 700(): HEX {
        return '#2962FF';
    }

    public get default(): HEX {
        return '#448AFF';
    }
}

export default new BlueAccent();
