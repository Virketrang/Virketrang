import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Indigo {
    public get 50(): HEX {
        return '#E8EAF6';
    }

    public get 100(): HEX {
        return '#C5CAE9';
    }

    public get 200(): HEX {
        return '#9FA8DA';
    }

    public get 300(): HEX {
        return '#7986CB';
    }

    public get 400(): HEX {
        return '#5C6BC0';
    }

    public get 500(): HEX {
        return '#3F51B5';
    }

    public get 600(): HEX {
        return '#3949AB';
    }

    public get 700(): HEX {
        return '#303F9F';
    }

    public get 800(): HEX {
        return '#283593';
    }

    public get 900(): HEX {
        return '#1A237E';
    }
}

export default new Indigo();
