import { forwardRef, memo } from 'react';

import { ClassAttribute } from 'utils/index';

import ListItemComponent from './item.component.types';
import styles from './item.component.module.sass';

const ListItem: ListItemComponent = memo(
    forwardRef(({ className = '', style, ...props }, ref) => {
        const classNames = ClassAttribute(className, styles.item);

        return <li className={classNames} style={{ ...style }} {...props} ref={ref} />;
    })
);

export default ListItem;
