const Margin = function (
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

Margin.top = function (top: string | number) {
    return `${top} 0 0 0`;
};

Margin.right = function (right: string | number) {
    return `0 ${right} 0 0`;
};

Margin.bottom = function (bottom: string | number) {
    return `0 0 ${bottom} 0`;
};

Margin.left = function (left: string | number) {
    return `0 0 0 ${left}`;
};

Reflect.preventExtensions(Margin);

export default Margin;
