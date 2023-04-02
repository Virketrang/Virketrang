import { StyleSheet } from 'react-native';

import { AlignItems, FontWeight, JustifyContent, TextAlign } from '@css-properties/native';

const styles = StyleSheet.create({
    button: {
        textAlign: TextAlign.center,
        paddingVertical: 10,
        fontWeight: FontWeight.medium,
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
    },
    link: {},
    text: {},
    small: { paddingHorizontal: 10 },
    medium: {
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    large: { paddingVertical: 24, paddingHorizontal: 36 },
    round: {},
    rounded: {
        borderRadius: 10,
    },
    normal: {},
});

export default styles;
