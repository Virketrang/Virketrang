import { Singleton } from '../decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Purple {
    public get 50(): HEX {
        return '#F3E5F5';
    }

    public get 100(): HEX {
        return '#E1BEE7';
    }

    public get 200(): HEX {
        return '#CE93D8';
    }

    public get 300(): HEX {
        return '#BA68C8';
    }

    public get 400(): HEX {
        return '#AB47BC';
    }

    public get 500(): HEX {
        return '#9C27B0';
    }

    public get 600(): HEX {
        return '#8E24AA';
    }

    public get 700(): HEX {
        return '#7B1FA2';
    }

    public get 800(): HEX {
        return '#6A1B9A';
    }

    public get 900(): HEX {
        return '#4A148C';
    }
}

export default new Purple();
