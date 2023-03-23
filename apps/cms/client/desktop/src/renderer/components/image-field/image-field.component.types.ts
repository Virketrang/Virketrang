import { Dispatch, FunctionComponent, SetStateAction } from 'react';

type ImageFieldComponent = FunctionComponent<{ fileList: File[]; setFileList: Dispatch<SetStateAction<File[]>> }>;

export default ImageFieldComponent;
