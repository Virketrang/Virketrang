import { Children, isValidElement } from 'react';

export default function extractProps<T>(children: T, props: string[]) {
    Children.map(children, child => {
        let value: any = {};

        if (!isValidElement(child)) throw Error('Select component children must be of type Option');

        const childProps = child.props as any;

        if (!childProps) throw Error('No props was provided');

        props.map(prop => {
            value[prop] = childProps[prop];
        });

        return value;
    });
}
