import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const Unmatched = () => {
    return (
        <View>
            <Text>Not found</Text>
            <Link href="/">Return</Link>
        </View>
    )
}

export default Unmatched
