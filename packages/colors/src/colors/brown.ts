import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Brown {
    public get 50(): HEX {
        return '#EFEBE9';
    }

    public get 100(): HEX {
        return '#D7CCC8';
    }

    public get 200(): HEX {
        return '#BCAAA4';
    }

    public get 300(): HEX {
        return '#A1887F';
    }

    public get 400(): HEX {
        return '#8D6E63';
    }

    public get 500(): HEX {
        return '#795548';
    }

    public get 600(): HEX {
        return '#6D4C41';
    }

    public get 700(): HEX {
        return '#5D4037';
    }

    public get 800(): HEX {
        return '#4E342E';
    }

    public get 900(): HEX {
        return '#3E2723';
    }
}

export default new Brown();
