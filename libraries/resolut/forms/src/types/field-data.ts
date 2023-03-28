type FieldData<T extends string> = {
    [key in T]: {
        value: string;
    };
};

export default FieldData;
