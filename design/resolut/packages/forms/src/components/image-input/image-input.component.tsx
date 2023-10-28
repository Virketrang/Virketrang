import { forwardRef, memo } from 'react';

import ImageInputComponent from './image-input.component.types';

import { Input } from '..';

const ImageInput: ImageInputComponent = memo(
    forwardRef(
        ({ className = '', multiple = false, __type = 'RESOLUT_INPUT', __is_file_input = true, ...props }, ref) => {
            return <Input ref={ref} className={className} type="file" multiple={multiple} {...props} />;
        }
    )
);

ImageInput.displayName = 'ImageInput';

ImageInput.defaultProps = { __type: 'RESOLUT_INPUT', __is_file_input: true };

export default ImageInput;
