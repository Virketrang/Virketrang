import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Orange {
    public get 50(): HEX {
        return '#FFF3E0';
    }

    public get 100(): HEX {
        return '#FFE0B2';
    }

    public get 200(): HEX {
        return '#FFCC80';
    }

    public get 300(): HEX {
        return '#FFB74D';
    }

    public get 400(): HEX {
        return '#FFA726';
    }

    public get 500(): HEX {
        return '#FF9800';
    }

    public get 600(): HEX {
        return '#FB8C00';
    }

    public get 700(): HEX {
        return '#F57C00';
    }

    public get 800(): HEX {
        return '#EF6C00';
    }

    public get 900(): HEX {
        return '#E65100';
    }
}

export default new Orange();
