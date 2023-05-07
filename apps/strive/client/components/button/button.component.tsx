import { TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';

import Colors from '@resolut/colors';

import ButtonComponent from './button.component.types';
import styles from './button.component.styles';

const Button: ButtonComponent = ({
    children,
    style,
    stretch = false,
    size = 'medium',
    shape = 'normal',
    type = 'link',
    href,
    color = Colors.white,
    backgroundColor = Colors.blue[400],
}) => {
    if (type === 'button')
        return (
            <TouchableOpacity
                style={[
                    styles.button,
                    styles[size],
                    styles[shape],
                    stretch && { width: '100%' },
                    { color, backgroundColor },
                    style && style,
                ]}>
                <Text style={[styles.button, { color }]}>{children}</Text>
            </TouchableOpacity>
        );

    if (type === 'link')
        return (
            <TouchableOpacity
                style={[
                    styles.button,
                    styles[size],
                    styles[shape],
                    stretch && { width: '100%' },
                    { color, backgroundColor },
                    style && style,
                ]}>
                <Link href={href} style={[styles.link, { color }]}>
                    {children}
                </Link>
            </TouchableOpacity>
        );

    throw Error("Unknown button type. Type must be either 'button' or 'link'");
};

export default Button;
