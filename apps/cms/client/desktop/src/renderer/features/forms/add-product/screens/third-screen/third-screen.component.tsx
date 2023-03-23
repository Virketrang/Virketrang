import { ImageField } from '@components/index';
import ThirdScreenComponent from './third-screen.component.types';

const ThirdScreen: ThirdScreenComponent = ({ images, setImages, screen }) => {
    if (screen !== 3) return null;

    return <ImageField fileList={images} setFileList={setImages} />;
};

export default ThirdScreen;
