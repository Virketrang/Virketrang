import { numberToPixels } from '../../../logic';

export default function padding(
    all?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
): number | string {
    const paddingAll = typeof all !== 'undefined' && typeof all !== null;
    const paddingTop = typeof top !== 'undefined' && typeof top !== null;
    const paddingRight = typeof right !== 'undefined' && typeof right !== null;
    const paddingBottom = typeof bottom !== 'undefined' && typeof bottom !== null;
    const paddingLeft = typeof left !== 'undefined' && typeof left !== null;

    if (paddingTop || paddingRight || paddingBottom || paddingLeft)
        return `${paddingTop ? numberToPixels(top) : 0} ${paddingRight ? numberToPixels(right) : 0} ${
            paddingBottom ? numberToPixels(bottom) : 0
        } ${paddingLeft ? numberToPixels(left) : 0}`;

    if (paddingAll && typeof all === 'string') return all;
    if (paddingAll && typeof all === 'number') return numberToPixels(all);

    return 0;
}
