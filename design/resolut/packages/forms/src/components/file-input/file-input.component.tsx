import { forwardRef, memo } from 'react';
import Input from '../input/input.component';

import FileInputComponent from './file-input.component.types';

const FileInput: FileInputComponent = memo(
    forwardRef(
        (
            { className = '', multiple = false, __type = 'RESOLUT_INPUT', shape = 'square', size = 'medium', ...props },
            ref
        ) => {
            return <Input className={className} multiple={multiple} type="file" ref={ref} {...props} />;
        }
    )
);

FileInput.displayName = 'FileInput';

FileInput.defaultProps = { __type: 'RESOLUT_INPUT' };

export default FileInput;
