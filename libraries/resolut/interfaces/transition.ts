import { TimingFunction } from '../types';

interface Transition {
    delay?: number;
    duration?: number;
    timingFunction?: TimingFunction;
    property?: string;
}

export default Transition;
