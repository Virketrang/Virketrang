import { forwardRef, memo } from 'react';

import styles from './text-area.component.module.sass';
import propTypes from './text-area.component.proptypes';
import TextAreaComponent from './text-area.component.types';

const TextArea: TextAreaComponent = memo(
    forwardRef(
        (
            { className, autoComplete = 'on', autoCorrect = 'on', lang = 'da', __type = 'RESOLUT_INPUT', ...props },
            ref
        ) => {
            return (
                <textarea
                    ref={ref}
                    className={`${className} ${styles.textarea}`}
                    {...props}
                    autoComplete={autoComplete}
                    autoCorrect={autoCorrect}
                    lang={lang}
                />
            );
        }
    )
);

TextArea.displayName = 'TextArea';

TextArea.propTypes = propTypes;

TextArea.defaultProps = {
    __type: 'RESOLUT_INPUT',
};

export default TextArea;
