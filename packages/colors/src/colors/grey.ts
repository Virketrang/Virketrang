import { HEX } from '../types/hex';

abstract class Grey {
    public static get 50(): HEX {
        return '#FAFAFA';
    }

    public static get 100(): HEX {
        return '#F5F5F5';
    }

    public static get 200(): HEX {
        return '#EEEEEE';
    }

    public static get 300(): HEX {
        return '#E0E0E0';
    }

    public static get 350(): HEX {
        return '#D6D6D6';
    }

    public static get 400(): HEX {
        return '#BDBDBD';
    }

    public static get 500(): HEX {
        return '#9E9E9E';
    }

    public static get 600(): HEX {
        return '#757575';
    }

    public static get 700(): HEX {
        return '#616161';
    }

    public static get 800(): HEX {
        return '#424242';
    }

    public static get 850(): HEX {
        return '#303030';
    }

    public static get 900(): HEX {
        return '#212121';
    }
}

export default Grey;
