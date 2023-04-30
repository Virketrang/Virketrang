import spaceSanitizer from './space-sanitizer';

const ClassAttribute = (...args: string[]): string => spaceSanitizer(args.join(' '));

export default ClassAttribute;
