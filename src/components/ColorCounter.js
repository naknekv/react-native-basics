import React from 'react'
import { View, Text, Button } from 'react-native'

const ColorCounter = ({ title, color, setColor }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Button title={`More ${title}`} onPress={() => color < 255 && setColor(color + 15)} />
            <Button title={`Less ${title}`} onPress={() => color > 0 && setColor(color - 15)} />
        </View>
    )
}

export default ColorCounter
