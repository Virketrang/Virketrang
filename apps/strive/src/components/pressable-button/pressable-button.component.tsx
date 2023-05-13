import { Pressable, View, Text } from 'react-native'

import Colors from '@resolut/colors'

import { button, buttonText, pressedStyle } from './pressable-button.component.styles'
import PressableButtonComponent from './pressable-button.component.types'

const PressableButton: PressableButtonComponent = (props) => {
    return (
        <Pressable
            style={({ pressed }) => pressed && pressedStyle}
            onPress={() => props.setVisible(true)}
            android_ripple={{ color: Colors.grey[400] }}
        >
            <View style={button}>
                <Text style={buttonText}>Login</Text>
            </View>
        </Pressable>
    )
}

export default PressableButton
