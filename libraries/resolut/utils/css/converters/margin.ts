import { numberToPixels } from '../../';

export default function margin(
    all?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
): number | string {
    const marginAll = typeof all !== 'undefined' && typeof all !== null;
    const marginTop = typeof top !== 'undefined' && typeof top !== null;
    const marginRight = typeof right !== 'undefined' && typeof right !== null;
    const marginBottom = typeof bottom !== 'undefined' && typeof bottom !== null;
    const marginLeft = typeof left !== 'undefined' && typeof left !== null;

    if (marginTop || marginRight || marginBottom || marginLeft)
        return `${marginTop ? numberToPixels(top) : 0} ${marginRight ? numberToPixels(right) : 0} ${
            marginBottom ? numberToPixels(bottom) : 0
        } ${marginLeft ? numberToPixels(left) : 0}`;

    if (marginAll && typeof all === 'string') return all;
    if (marginAll && typeof all === 'number') return numberToPixels(all);

    return 0;
}
