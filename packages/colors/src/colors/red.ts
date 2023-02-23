import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Red {
    public get 50(): HEX {
        return '#FFEBEE';
    }

    public get 100(): HEX {
        return '#FFCDD2';
    }

    public get 200(): HEX {
        return '#EF9A9A';
    }

    public get 300(): HEX {
        return '#E57373';
    }

    public get 400(): HEX {
        return '#EF5350';
    }

    public get 500(): HEX {
        return '#F44336';
    }

    public get 600(): HEX {
        return '#E53935';
    }

    public get 700(): HEX {
        return '#D32F2F';
    }

    public get 800(): HEX {
        return '#C62828';
    }

    public get 900(): HEX {
        return '#B71C1C';
    }
}

export default new Red();
