import { StyleSheet } from 'react-native'

import { JustifyContent, AlignItems, FontWeight } from '@css-properties/native'

export const { app, heading, caption } = StyleSheet.create({
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
    }
})
