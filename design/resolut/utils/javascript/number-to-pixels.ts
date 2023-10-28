import isNumeric from './is-numeric';

const numberToPixels = (value: number | string): string => (isNumeric(value) ? `${value}px` : (value as string));

export default numberToPixels;
