type JumpTerms = 'jump-start' | 'jump-end' | 'jump-both' | 'jump-none' | 'start' | 'end' | 'step-start' | 'step-end';

export default function steps(value: number, jumpterm: JumpTerms) {
    return `steps(${value}, ${jumpterm})`;
}
