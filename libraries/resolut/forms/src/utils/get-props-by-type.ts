import { ReactElement } from 'react';
import { Children, isValidElement, ReactNode } from 'react';
import isString from './is-string';

const getPropsByType = (children: ReactNode, props: string[], type: string[], customType?: string) => {
    const getProps = (child: ReactElement) =>
        Object.keys(child.props)
            .filter(key => props.includes(key))
            .reduce((object: object, key: string) => ({ ...object, [key]: child.props[key] }), {});

    const propsArray = Children.map(children, child => {
        if (!isValidElement(child)) return null;

        if (customType && child.props.__type && child.props.__type === customType) return getProps(child);

        if (isString(child.type) && type.includes(child.type as string)) return getProps(child);

        return null;
    });

    if (!propsArray) throw Error(`Unable to generate props array`);

    const filteredProps = propsArray.filter(entry => entry !== null);

    if (filteredProps.length > 1) throw Error(`More than one component has a prop with the names of ${filteredProps}`);

    return filteredProps[0];
};

export default getPropsByType;
