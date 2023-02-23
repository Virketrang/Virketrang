import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class DeepPurpleAccent {
    public get 100(): HEX {
        return '#B388FF';
    }

    public get 400(): HEX {
        return '#651FFF';
    }

    public get 700(): HEX {
        return '#6200EA';
    }

    public get default(): HEX {
        return '#7C4DFF';
    }
}

export default new DeepPurpleAccent();
