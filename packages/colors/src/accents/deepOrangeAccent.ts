import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class DeepOrangeAccent {
    public get 100(): HEX {
        return '#FF9E80';
    }

    public get 400(): HEX {
        return '#FF3D00';
    }

    public get 700(): HEX {
        return '#DD2C00';
    }

    public get default(): HEX {
        return '#FF6E40';
    }
}

export default new DeepOrangeAccent();
