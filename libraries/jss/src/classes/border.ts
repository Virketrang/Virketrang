const Border = function (width: string, style: string, color: string) {
    return `${width} ${style} ${color}`;
};

Border.none = 'none' as const;
Border.hidden = 'hidden' as const;
Border.dotted = 'dotted' as const;
Border.dashed = 'dashed' as const;
Border.solid = 'solid' as const;
Border.double = 'double' as const;
Border.groove = 'groove' as const;
Border.ridge = 'ridge' as const;
Border.inset = 'inset' as const;
Border.outset = 'outset' as const;

Border.inherit = 'inherit' as const;
Border.initial = 'initial' as const;
Border.revert = 'revert' as const;
Border.revertLayer = 'revert-layer' as const;
Border.unset = 'unset' as const;

export default Border;
