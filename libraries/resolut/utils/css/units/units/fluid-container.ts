import { numberToPixels } from '../../../';
import { clamp } from '../../functions';

const convertFluidContainerSizeToCSSValue = (size: string | number) => {
    switch (size) {
        case 'size-container-fluid-0':
            return clamp('.5rem', '1cqi', '1rem');
        case 'size-container-fluid-1':
            return clamp('1rem', '2cqi', '1.5rem');
        case 'size-container-fluid-2':
            return clamp('1.5rem', '3cqi', '2rem');
        case 'size-container-fluid-3':
            return clamp('2rem', '4cqi', '3rem');
        case 'size-container-fluid-4':
            return clamp('4rem', '5cqi', '5rem');
        case 'size-container-fluid-5':
            return clamp('5rem', '7cqi', '7.5rem');
        case 'size-container-fluid-6':
            return clamp('7.5rem', '10cqi', '10rem');
        case 'size-container-fluid-7':
            return clamp('10rem', '20cqi', '15rem');
        case 'size-container-fluid-8':
            return clamp('15rem', '30cqi', '20rem');
        case 'size-container-fluid-9':
            return clamp('20rem', '40cqi', '30rem');
        default:
            break;
    }

    return numberToPixels(size);
};

export default convertFluidContainerSizeToCSSValue;
