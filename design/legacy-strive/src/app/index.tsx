import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Button } from '../components/index'

import { app, heading, caption, button, buttonGroup } from './_styles'
import Colors from '@resolut/colors'
import { useRouter } from 'expo-router'

export default function App() {
    const router = useRouter()

    return (
        <View style={app}>
            <Text style={heading}>Strive</Text>
            <Text style={caption}>Track your progress - Achieve your goals</Text>
            <View style={buttonGroup}>
                <Button
                    style={button}
                    shape="rounded"
                    color={Colors.white}
                    backgroundColor={Colors.blue[400]}
                    onPress={() => router.push('/signin')}
                >
                    Signin
                </Button>
                <Button
                    style={button}
                    shape="rounded"
                    color={Colors.white}
                    backgroundColor={Colors.orange[400]}
                    onPress={() => router.push('/signup')}
                >
                    Signup
                </Button>
            </View>
            <StatusBar />
        </View>
    )
}
