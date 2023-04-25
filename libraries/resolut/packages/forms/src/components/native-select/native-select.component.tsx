import { forwardRef, memo } from 'react';

import '../../../../../styles/base.sass';
import '../../../../../styles/alert.sass';
import '../../../../../styles/stretch.sass';
import '../../../../../styles/size.sass';
import '../../../../../styles/shape.sass';

import NativeSelectComponent from './native-select.component.types';
import styles from './native-select.component.module.sass';
import Spinner from '../spinner/spinner.component';
import { ArrowDown } from '../../svgs';

const NativeSelect: NativeSelectComponent = memo(
    forwardRef(
        (
            {
                children,
                options,
                size = 'medium',
                disabled = false,
                loading = false,
                fit,
                stretch,
                status,
                className = '',
                shape = 'square',
                __type = 'RESOLUT_INPUT',
                ...props
            },
            ref
        ) => {
            const classNames = `${className} ${styles.select} ${status ? status : ''} ${size} ${
                stretch ? 'stretch' : ''
            } ${shape}`;

            return (
                <div className={`${styles.selectContainer} ${stretch ? 'stretch' : ''}`}>
                    <select size={fit} {...props} ref={ref} className={classNames} disabled={disabled}>
                        {children && children}
                        {options &&
                            options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                    </select>
                    <span className={styles.icon}>{loading ? <Spinner /> : <ArrowDown />}</span>
                </div>
            );
        }
    )
);

NativeSelect.displayName = 'NativeSelect';

export default NativeSelect;
