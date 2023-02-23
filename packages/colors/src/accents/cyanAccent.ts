import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class CyanAccent {
    public get 100(): HEX {
        return '#84FFFF';
    }

    public get 400(): HEX {
        return '#00E5FF';
    }

    public get 700(): HEX {
        return '#00B8D4';
    }

    public get default(): HEX {
        return '#18FFFF';
    }
}

export default new CyanAccent();
