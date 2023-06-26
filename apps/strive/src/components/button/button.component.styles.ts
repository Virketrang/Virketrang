import { FontWeight, TextAlign } from '@css-properties/native'
import Colors from '@resolut/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    pressable: {},
    view: {
        width: '100%',
        shadowColor: Colors.black
    },
    text: { fontWeight: FontWeight.bold, width: '100%', textAlign: TextAlign.center },
    small: {},
    medium: {
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    large: {}
})

export default styles
