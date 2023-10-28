type WithAutoComplete<T extends string> = T | ((number | string) & Record<never, never>);

export default WithAutoComplete;
