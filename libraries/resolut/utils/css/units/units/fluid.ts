import { numberToPixels } from '../../../';
import { clamp } from '../../functions';

const convertFluidSizeToCSSValue = (size: string | number) => {
    switch (size) {
        case 'size-fluid-0':
            return clamp('.5rem', '1vw', '1rem');
        case 'size-fluid-1':
            return clamp('1rem', '2vw', '1.5rem');
        case 'size-fluid-2':
            return clamp('1.5rem', '3vw', '2rem');
        case 'size-fluid-3':
            return clamp('2rem', '4vw', '3rem');
        case 'size-fluid-4':
            return clamp('4rem', '5vw', '5rem');
        case 'size-fluid-5':
            return clamp('5rem', '7vw', '7.5rem');
        case 'size-fluid-6':
            return clamp('7.5rem', '10vw', '10rem');
        case 'size-fluid-7':
            return clamp('10rem', '20vw', '15rem');
        case 'size-fluid-8':
            return clamp('15rem', '30vw', '20rem');
        case 'size-fluid-9':
            return clamp('20rem', '40vw', '30rem');
        default:
            break;
    }

    return numberToPixels(size);
};

export default convertFluidSizeToCSSValue;
