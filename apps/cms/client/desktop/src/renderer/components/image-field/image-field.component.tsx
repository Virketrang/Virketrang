import { FormEvent } from 'react';
import useImageFieldStyles from './image-field.component.styles';
import ImageFieldComponent from './image-field.component.types';

const ImageField: ImageFieldComponent = ({ fileList, setFileList }) => {
    const styles = useImageFieldStyles();

    const onDragEnter = () => {};

    const onDragLeave = () => {};

    const onDrop = () => {};

    const handleUpload = (event: FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.files) throw Error('event.currentTarget.files does not exist!');

        const newFile = event.currentTarget.files[0];

        if (!newFile) return;

        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
    };

    return (
        <>
            <div className={styles.area}>
                <div className={styles.upload} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
                    <input type="file" className={styles.input} onChange={handleUpload} />
                    <span className={styles.dropTitle}>
                        Træk et billede
                        <br /> henover <br />
                        for at uploaded
                    </span>
                </div>
            </div>
            <div className={styles.files}>
                {fileList.map((file, index) => (
                    <img key={index} className={styles.file} src={URL.createObjectURL(file)} />
                ))}
            </div>
        </>
    );
};

export default ImageField;
