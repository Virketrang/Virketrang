const spaceSanitizer = (string: string) => string.replace(/  +/g, ' ').replace(/^ /, '').replace(/$ /, '');

export default spaceSanitizer;
