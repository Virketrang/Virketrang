import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Lime {
    public get 50(): HEX {
        return '#F9FBE7';
    }

    public get 100(): HEX {
        return '#F0F4C3';
    }

    public get 200(): HEX {
        return '#E6EE9C';
    }

    public get 300(): HEX {
        return '#DCE775';
    }

    public get 400(): HEX {
        return '#D4E157';
    }

    public get 500(): HEX {
        return '#CDDC39';
    }

    public get 600(): HEX {
        return '#C0CA33';
    }

    public get 700(): HEX {
        return '#AFB42B';
    }

    public get 800(): HEX {
        return '#9E9D24';
    }

    public get 900(): HEX {
        return '#827717';
    }
}

export default Lime;
