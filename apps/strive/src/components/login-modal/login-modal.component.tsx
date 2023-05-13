import { Modal, View, TextInput } from 'react-native'

import LoginModalComponent from './login-modal.component.types'

const LoginModal: LoginModalComponent = (props) => {
    return (
        <Modal visible={props.visible}>
            <View>
                <TextInput placeholder="Username" />
                <TextInput placeholder="Password" secureTextEntry />
            </View>
        </Modal>
    )
}

export default LoginModal
