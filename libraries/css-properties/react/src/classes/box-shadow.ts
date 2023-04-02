const BoxShadow = function (
    offsetX: string | 0,
    offsetY: string | 0,
    blurRadius: string | 0,
    spreadRadius: string | 0,
    color: string
) {
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${color}`;
};

BoxShadow.none = 'none' as const;

BoxShadow.inherit = 'inherit' as const;
BoxShadow.initial = 'initial' as const;
BoxShadow.revert = 'revert' as const;
BoxShadow.revertLayer = 'revert-layer' as const;
BoxShadow.unset = 'unset' as const;

Object.freeze(BoxShadow);

export default BoxShadow;
