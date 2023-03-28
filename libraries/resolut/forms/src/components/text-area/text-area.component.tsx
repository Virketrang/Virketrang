import { forwardRef } from 'react';

import styles from './text-area.component.module.sass';
import { Ref, Props } from './text-area.component.types';

const TextArea = forwardRef<Ref, Props>(({ name, label, ...props }, ref) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <textarea className={styles.input} name={name} {...props}></textarea>
        </div>
    );
});

export default TextArea;
