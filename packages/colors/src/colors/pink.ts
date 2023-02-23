import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Pink {
    public get 50(): HEX {
        return '#FCE4EC';
    }

    public get 100(): HEX {
        return '#F8BBD0';
    }

    public get 200(): HEX {
        return '#F48FB1';
    }

    public get 300(): HEX {
        return '#F06292';
    }

    public get 400(): HEX {
        return '#EC407A';
    }

    public get 500(): HEX {
        return '#E91E63';
    }

    public get 600(): HEX {
        return '#D81B60';
    }

    public get 700(): HEX {
        return '#C2185B';
    }

    public get 800(): HEX {
        return '#AD1457';
    }

    public get 900(): HEX {
        return '#880E4F';
    }
}

export default new Pink();
