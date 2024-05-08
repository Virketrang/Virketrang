import { StyleSheet } from 'react-native'

import { AlignItems, FontWeight, JustifyContent } from '@css-properties/native'
import Colors from '@resolut/colors'

export const { modal, input, inputContainer, pressable, button, buttonText } = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        backgroundColor: '#f5f4f5'
    },
    inputContainer: {
        width: '80%',
        gap: 16,
        marginBottom: 32
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: Colors.white
    },
    pressable: {
        width: '60%',
        backgroundColor: Colors.blue[400],
        height: 54,
        marginTop: 12,
        borderRadius: 12
    },
    button: {
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        height: '100%'
    },
    buttonText: {
        color: Colors.white,
        fontWeight: FontWeight.bold
    }
})
