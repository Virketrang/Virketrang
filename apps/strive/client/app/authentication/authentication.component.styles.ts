import { AlignItems, JustifyContent } from '@css-properties/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
    },
});

export default styles;
