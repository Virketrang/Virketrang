const renameKey = <T extends string>(object: { [key in T]: string | number }, oldKey: T, newKey: string) => {
    Object.defineProperty(object, newKey, Object.getOwnPropertyDescriptor(object, oldKey)!);
    delete object[oldKey];
    return object;
};

export default renameKey;
