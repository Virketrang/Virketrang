const camelCaseToHyphenCase = (key: string) =>
    key
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .join('-')
        .toLowerCase();

export default camelCaseToHyphenCase;
