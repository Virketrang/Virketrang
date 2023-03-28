import { Children, ReactElement } from 'react';

export default function findInput(children: ReactElement | ReactElement[], type: string | string[]) {
    if (Children.count(children) === 1) return children as ReactElement;

    const matches = Children.map(children, child => {
        const { type: childType } = child;

        if (typeof childType !== 'string' && !(childType instanceof String)) return;

        if ((typeof type === 'string' || type instanceof String) && childType === type) return child;

        if (Array.isArray(type) && type.includes(childType as string)) return child;

        return;
    });

    return matches[0] as ReactElement;
}
