import { createElement } from 'react';
import IconButtonComponent from './icon-button.component.types';

const IconButton: IconButtonComponent = ({ icon, size, color }) => {
    return createElement(icon, { size, color });
};

export default IconButton;
