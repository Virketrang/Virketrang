import { createElement, forwardRef, memo } from 'react';

import { ClassAttribute, CSSVariables } from 'utils/index';

import ListComponent from './list.component.types';
import styles from './list.component.module.sass';

import { ListItem, ListItemComponent } from './components';

const NAME = 'list';

const Component: ListComponent = memo(
    forwardRef(({ element = 'ul', styleType = 'none', className = '', style, children, ...props }, ref) => {
        const classNames = ClassAttribute(className, styles.list);

        const CSSVariablesStyles = CSSVariables({ styleType }, NAME);

        return createElement(
            element,
            { ref, className: classNames, style: { ...style, ...CSSVariablesStyles }, ...props },
            children
        );
    })
);

Component.displayName = NAME;

const List: ListComponent & { Item: ListItemComponent } = Object.assign(Component, { Item: ListItem });

export default List;
