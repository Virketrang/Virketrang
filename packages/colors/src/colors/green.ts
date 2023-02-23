import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Green {
    public get 50(): HEX {
        return '#E8F5E9';
    }

    public get 100(): HEX {
        return '#C8E6C9';
    }

    public get 200(): HEX {
        return '#A5D6A7';
    }

    public get 300(): HEX {
        return '#81C784';
    }

    public get 400(): HEX {
        return '#66BB6A';
    }

    public get 500(): HEX {
        return '#4CAF50';
    }

    public get 600(): HEX {
        return '#43A047';
    }

    public get 700(): HEX {
        return '#388E3C';
    }

    public get 800(): HEX {
        return '#2E7D32';
    }

    public get 900(): HEX {
        return '#1B5E20';
    }
}

export default new Green();
