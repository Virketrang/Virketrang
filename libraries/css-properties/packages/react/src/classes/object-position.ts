const ObjectPosition = function (
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

ObjectPosition.top = 'top' as const;
ObjectPosition.bottom = 'bottom' as const;
ObjectPosition.left = 'left' as const;
ObjectPosition.right = 'right' as const;
ObjectPosition.center = 'center' as const;

ObjectPosition.inherit = 'inherit' as const;
ObjectPosition.initial = 'initial' as const;
ObjectPosition.revert = 'revert' as const;
ObjectPosition.revertLayer = 'revert-layer' as const;
ObjectPosition.unset = 'unset' as const;

Object.freeze(ObjectPosition);

export default ObjectPosition;
