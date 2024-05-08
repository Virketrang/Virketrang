import { StyleSheet } from 'react-native'

import { JustifyContent, AlignItems, FontWeight, FlexDirection } from '@css-properties/native'
import Colors from '@resolut/colors'

export const { app, heading, caption, button, buttonGroup } = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center
    },
    heading: {
        fontSize: 96,
        fontWeight: FontWeight.extraBold
    },
    caption: {
        fontSize: 18
    },
    buttonGroup: {
        flexDirection: FlexDirection.row,
        gap: 16,
        marginTop: 16
    },
    button: {
        elevation: 4,
        marginTop: 16,
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        shadowRadius: -2
    }
})
