const TextDecoration = function (arg0: string, arg1?: string, arg2?: string, arg3?: string) {
    if (arg0 !== undefined && arg1 !== undefined && arg2 !== undefined && arg3 !== undefined)
        return `${arg0} ${arg1} ${arg2} ${arg3}`;
    if (arg0 !== undefined && arg1 !== undefined && arg2 !== undefined) return `${arg0} ${arg1} ${arg2}`;
    if (arg0 !== undefined && arg1 !== undefined) return `${arg0} ${arg1}`;
    return `${arg0}`;
};

TextDecoration.overline = 'overline' as const;
TextDecoration.underline = 'underline' as const;
TextDecoration.none = 'none' as const;

TextDecoration.inherit = 'inherit' as const;
TextDecoration.initial = 'initial' as const;
TextDecoration.revert = 'revert' as const;
TextDecoration.revertLayer = 'revert-layer' as const;
TextDecoration.unset = 'unset' as const;

Object.freeze(TextDecoration);

export default TextDecoration;
