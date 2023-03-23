import IconComponent from './icon.component.types';
import styles from './icon.component.module.sass';

const Icon: IconComponent = ({ height, width, path, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={48}
            width={48}
            style={{ width, height, fill: color }}
            viewBox="0 0 48 48">
            <path d={path} />
        </svg>
    );
};

export default Icon;
