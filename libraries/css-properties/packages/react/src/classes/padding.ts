const Padding = function (
    arg0: string | number,
    arg1?: string | number,
    arg2?: string | number,
    arg3?: string | number
) {
    if (arg0 !== undefined && arg1 !== undefined && arg2 !== undefined && arg3 !== undefined)
        return `${arg0} ${arg1} ${arg2} ${arg3}`;
    if (arg0 !== undefined && arg1 !== undefined && arg2 !== undefined) return `${arg0} ${arg1} ${arg2}`;
    if (arg0 !== undefined && arg1 !== undefined) return `${arg0} ${arg1}`;
    return `${arg0}`;
};

Padding.top = function (top: string | number) {
    return `${top} 0 0 0`;
};

Padding.right = function (right: string | number) {
    return `0 ${right} 0 0`;
};

Padding.bottom = function (bottom: string | number) {
    return `0 0 ${bottom} 0`;
};

Padding.left = function (left: string | number) {
    return `0 0 0 ${left}`;
};

Object.freeze(Padding);

export default Padding;
