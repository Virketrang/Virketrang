import { FunctionComponent, ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonShape = 'normal' | 'round' | 'rounded';

interface BaseProps {
    children: string;
    stretch?: boolean;
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: string;
    backgroundColor?: string;
}

interface LinkProps extends BaseProps {
    href: string;
    style?: StyleProp<TextStyle>;
    type?: 'link';
}

interface ButtonProps extends BaseProps {
    href?: never;
    style?: StyleProp<ViewStyle>;
    type?: 'button';
}

type Props = LinkProps | ButtonProps;

type ButtonComponent = FunctionComponent<Props>;

export default ButtonComponent;
