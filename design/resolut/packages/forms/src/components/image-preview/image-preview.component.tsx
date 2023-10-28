import { forwardRef, memo } from 'react';
import { useFormContext } from '../../hooks';

import ImagePreviewComponent from './image-preview.component.types';
import styles from './image-preview.component.module.sass';

const reader = new FileReader();

const ImagePreview: ImagePreviewComponent = memo(
    forwardRef(({ fieldName, className = '', ...props }, ref) => {
        const [state, dispatch] = useFormContext();
        const files: FileList | undefined = state[fieldName] ? (state[fieldName].value as FileList) : undefined;

        console.log(files);

        return (
            <div ref={ref} {...props} className={`${className} ${styles.preview}`}>
                {files &&
                    Object.keys(files).map((key, index) => <img key={key} src={URL.createObjectURL(files[index])} />)}
            </div>
        );
    })
);

ImagePreview.displayName = 'ImagePreview';

export default ImagePreview;
