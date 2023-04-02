import { FunctionComponent, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ButtonGroupComponent = FunctionComponent<{
    children: ReactNode;
    gap?: number;
    style?: StyleProp<ViewStyle>;
    direction?: Direction;
}>;

export default ButtonGroupComponent;
