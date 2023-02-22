import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Blue {
    public get 50(): HEX {
        return '#E3F2FD';
    }

    public get 100(): HEX {
        return '#BBDEFB';
    }

    public get 200(): HEX {
        return '#90CAF9';
    }

    public get 300(): HEX {
        return '#64B5F6';
    }

    public get 400(): HEX {
        return '#42A5F5';
    }

    public get 500(): HEX {
        return '#2196F3';
    }

    public get 600(): HEX {
        return '#1E88E5';
    }

    public get 700(): HEX {
        return '#1976D2';
    }

    public get 800(): HEX {
        return '#1565C0';
    }

    public get 900(): HEX {
        return '#0D47A1';
    }
}

export default new Blue();
