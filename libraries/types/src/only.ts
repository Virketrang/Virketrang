type Only<T1, T2> = {
    [P in keyof T1]: T1[P];
} & {
    [P in keyof T2]?: never;
};

export default Only;
