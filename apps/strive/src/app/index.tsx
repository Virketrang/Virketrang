import { Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { LoginModal, PressableButton } from 'src/components/index'

import { app, heading, caption } from './_styles'
import { useState } from 'react'

export default function App() {
    const [visible, setVisible] = useState(false)

    return (
        <View style={app}>
            <Text style={heading}>Strive</Text>
            <Text style={caption}>Track your progress - Achieve your goals</Text>
            <LoginModal visible={visible} />
            <PressableButton setVisible={setVisible} />
            <StatusBar />
        </View>
    )
}
