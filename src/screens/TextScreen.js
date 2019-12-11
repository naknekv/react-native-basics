import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const TextScreen = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input} 
                value={name}
                onChangeText={setName}
            />
            <Text>Enter Password:</Text>
            <TextInput 
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input} 
                value={password}
                onChangeText={setPassword}
            />
            <Text>
                {password.length < 5 && "Password must be longer than 5 characters"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
})

export default TextScreen
