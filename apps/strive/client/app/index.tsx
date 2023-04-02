import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { AlignItems, FontWeight, JustifyContent } from '@css-properties/native';
import Colors from '@resolut/colors';

import { Button, ButtonGroup } from '@components/index';

export default function App() {
    return (
        <View style={styles.app}>
            <Text style={styles.title}>Strive</Text>
            <Text style={styles.subtitle}>Track your progress - Achieve your goals!</Text>
            <ButtonGroup gap={20} style={styles.buttonGroup}>
                <Button href="/authentication/login" shape="rounded" backgroundColor={Colors.orange[400]}>
                    Login
                </Button>
                <Button href="/authentication/signup" shape="rounded" backgroundColor={Colors.orange[400]}>
                    Signup
                </Button>
            </ButtonGroup>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        flex: 1,
        backgroundColor: Colors.blue[400],
    },
    title: {
        fontSize: 40,
        fontWeight: FontWeight.bold,
        color: Colors.white,
    },
    subtitle: {
        color: Colors.white,
    },
    buttonGroup: {
        marginTop: 20,
    },
});
