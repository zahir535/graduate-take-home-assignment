import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function PageProfile({ navigation }) {



    //navigate to login page
    const GoToDashboard = () => {
        navigation.replace('Login')
    }

    return (
        <View style={styles.container}>
            <Text>page-profile</Text>
            <Button
                title="Press button"
                onPress={GoToDashboard}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});