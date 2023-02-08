import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class DeepPurple {
    public get 50(): HEX {
        return '#EDE7F6';
    }

    public get 100(): HEX {
        return '#D1C4E9';
    }

    public get 200(): HEX {
        return '#B39DDB';
    }

    public get 300(): HEX {
        return '#9575CD';
    }

    public get 400(): HEX {
        return '#7E57C2';
    }

    public get 500(): HEX {
        return '#673AB7';
    }

    public get 600(): HEX {
        return '#5E35B1';
    }

    public get 700(): HEX {
        return '#512DA8';
    }

    public get 800(): HEX {
        return '#4527A0';
    }

    public get 900(): HEX {
        return '#311B92';
    }
}

export default new DeepPurple();
