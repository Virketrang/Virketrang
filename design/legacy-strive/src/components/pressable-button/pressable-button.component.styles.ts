import { StyleSheet } from 'react-native'

import { JustifyContent, AlignItems, FontWeight } from '@css-properties/native'
import Colors from '@resolut/colors'

export const { button, buttonText, pressedStyle } = StyleSheet.create({
    button: {
        width: 150,
        height: 64,
        borderRadius: 10,
        marginTop: 40,
        backgroundColor: Colors.blue[600],
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center
    },
    buttonText: {
        fontSize: 16,
        fontWeight: FontWeight.bold,
        color: Colors.white
    },
    pressedStyle: {
        opacity: 0.5
    }
})
