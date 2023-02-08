import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class LightGreen {
    public get 50(): HEX {
        return '#F1F8E9';
    }

    public get 100(): HEX {
        return '#DCEDC8';
    }

    public get 200(): HEX {
        return '#C5E1A5';
    }

    public get 300(): HEX {
        return '#AED581';
    }

    public get 400(): HEX {
        return '#9CCC65';
    }

    public get 500(): HEX {
        return '#8BC34A';
    }

    public get 600(): HEX {
        return '#7CB342';
    }

    public get 700(): HEX {
        return '#689F38';
    }

    public get 800(): HEX {
        return '#558B2F';
    }

    public get 900(): HEX {
        return '#33691E';
    }
}

export default new LightGreen();
