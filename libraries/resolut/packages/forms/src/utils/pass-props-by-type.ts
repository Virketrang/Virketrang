import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import isString from './is-string';

const passPropsByType = (children: ReactNode, props: object, type: string[], customType?: string) => {
    const elements = Children.map(children, child => {
        if (!isValidElement(child)) return child;

        const clone = () => cloneElement(Children.only(child as ReactElement), props);

        if (customType && child.props.__type && child.props.__type === customType) return clone();

        if (isString(child.type) && type.includes(child.type as string)) return clone();

        return child as ReactElement;
    });

    return elements;
};

export default passPropsByType;
