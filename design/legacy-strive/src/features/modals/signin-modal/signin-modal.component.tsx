import { useState } from 'react'
import { Modal, View, TextInput, Pressable, Text, KeyboardAvoidingView } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'

import Firebase from '../../../../firebase'

import SigninModalComponent from './signin-modal.component.types'
import { modal, input, inputContainer, pressable, button, buttonText } from './signin-modal.component.styles'
import { useRouter } from 'expo-router'

const SigninModal: SigninModalComponent = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const login = async () => {
        try {
            props.setVisible(false)
            router.replace('/home')
            if (!email || !password) return
            const userCredentials = await signInWithEmailAndPassword(Firebase.auth, email, password)
            const { user } = userCredentials
        } catch (error) {
            throw error
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <KeyboardAvoidingView style={modal} behavior="padding">
                <View style={inputContainer}>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={input}
                        placeholder="Email"
                        maxLength={128}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect={false}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={input}
                        placeholder="Password"
                        secureTextEntry
                        maxLength={128}
                        keyboardType="default"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect={false}
                    />
                </View>
                <Pressable style={pressable} onPress={login}>
                    <View style={button}>
                        <Text style={buttonText}>Signin</Text>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default SigninModal
