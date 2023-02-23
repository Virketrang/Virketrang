import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class IndigoAccent {
    public get 100(): HEX {
        return '#8C9EFF';
    }

    public get 400(): HEX {
        return '#3D5AFE';
    }

    public get 700(): HEX {
        return '#304FFE';
    }

    public get default(): HEX {
        return '#536DFE';
    }
}

export default new IndigoAccent();
