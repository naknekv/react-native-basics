import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const myName = "naknekv"
    return (
        <View>
            <Text style={styles.textStyle}>React Native yay</Text>
            <Text styke={{ fontSize: 20 }}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})

export default ComponentsScreen