import { View } from 'react-native';

import ButtonGroupComponent from './button-group.component.types';
import styles from './button-group.component.styles';

const ButtonGroup: ButtonGroupComponent = ({ children, gap = 0, style, direction = 'row' }) => {
    return <View style={[styles.buttonGroup, style && style, { gap, flexDirection: direction }]}>{children}</View>;
};

export default ButtonGroup;
