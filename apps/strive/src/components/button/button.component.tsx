import { Pressable, View, Text } from 'react-native'

import { shape as shapeStyles, stretch as stretchStyles } from '../../styles'

import ButtonComponent from './button.component.types'
import styles from './button.component.styles'

const Button: ButtonComponent = ({
    children,
    style,
    shape = 'square',
    size = 'medium',
    stretch = false,
    elevation = 4,
    color,
    backgroundColor,
    ...props
}) => {
    return (
        <Pressable
            style={[
                styles.pressable,
                style,
                stretch && stretchStyles,
                {
                    backgroundColor,
                    elevation,
                    shadowRadius: elevation * 0.5,
                    shadowOpacity: 0.05 * elevation,
                    shadowOffset: { width: 0, height: elevation * 0.5 }
                },
                shapeStyles[shape]
            ]}
            {...props}
        >
            <View style={[styles.view, styles[size]]}>
                <Text style={[styles.text, { color }]}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default Button
