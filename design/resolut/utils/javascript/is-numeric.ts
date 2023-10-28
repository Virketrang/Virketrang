import isNumericString from './is-numeric-string';

const isNumeric = (value: string | number): boolean => (typeof value === 'string' ? isNumericString(value) : true);

export default isNumeric;
