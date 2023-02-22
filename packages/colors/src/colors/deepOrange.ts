import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class DeepOrange {
    public get 50(): HEX {
        return '#FBE9E7';
    }

    public get 100(): HEX {
        return '#FFCCBC';
    }

    public get 200(): HEX {
        return '#FFAB91';
    }

    public get 300(): HEX {
        return '#FF8A65';
    }

    public get 400(): HEX {
        return '#FF7043';
    }

    public get 500(): HEX {
        return '#FF5722';
    }

    public get 600(): HEX {
        return '#F4511E';
    }

    public get 700(): HEX {
        return '#E64A19';
    }

    public get 800(): HEX {
        return '#D84315';
    }

    public get 900(): HEX {
        return '#BF360C';
    }
}

export default new DeepOrange();
