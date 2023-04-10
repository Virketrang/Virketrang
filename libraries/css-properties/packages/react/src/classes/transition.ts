const Transition = function (property: string, duration: string, timingFunction: string, delay: string | 0) {
    return `${property} ${duration} ${timingFunction} ${delay}`;
};

Transition.inherit = 'inherit' as const;
Transition.initial = 'initial' as const;
Transition.revert = 'revert' as const;
Transition.revertLayer = 'revert-layer' as const;
Transition.unset = 'unset' as const;

Reflect.preventExtensions(Transition);

export default Transition;
