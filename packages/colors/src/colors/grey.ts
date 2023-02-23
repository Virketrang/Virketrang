import { Singleton } from '../../../../.idea/decorators/singleton';
import { HEX } from '../types/hex';

@Singleton
class Grey {
    public get 50(): HEX {
        return '#FAFAFA';
    }

    public get 100(): HEX {
        return '#F5F5F5';
    }

    public get 200(): HEX {
        return '#EEEEEE';
    }

    public get 300(): HEX {
        return '#E0E0E0';
    }

    public get 350(): HEX {
        return '#D6D6D6';
    }

    public get 400(): HEX {
        return '#BDBDBD';
    }

    public get 500(): HEX {
        return '#9E9E9E';
    }

    public get 600(): HEX {
        return '#757575';
    }

    public get 700(): HEX {
        return '#616161';
    }

    public get 800(): HEX {
        return '#424242';
    }

    public get 850(): HEX {
        return '#303030';
    }

    public get 900(): HEX {
        return '#212121';
    }
}

export default new Grey();
