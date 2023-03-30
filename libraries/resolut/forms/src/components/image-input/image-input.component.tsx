import { forwardRef, memo } from 'react';

import ImageInputComponent from './image-input.component.types';

import { Input } from '..';
import propTypes from './image-input.component.proptypes';

const ImageInput: ImageInputComponent = memo(
    forwardRef(({ className = '', multiple = false, __type = 'RESOLUT_INPUT', ...props }, ref) => {
        return <Input ref={ref} className={`${className}`} type="image" multiple={multiple} {...props} />;
    })
);

ImageInput.displayName = 'ImageInput';

ImageInput.propTypes = propTypes;

ImageInput.defaultProps = { __type: 'RESOLUT_INPUT' };

export default ImageInput;
