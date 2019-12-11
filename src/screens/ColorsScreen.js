import React, { useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    const randomNum = () => Math.floor(Math.random() * 256)
    const randomRgb = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    return (
        <View>
            <Button title="Add color" onPress={() => setColors([...colors, {rgb: randomRgb()}])} />
            <FlatList 
                data={colors} 
                keyExtractor={color => color.rgb}
                renderItem={({ item }) => 
                    <View style={{ width: 100, height: 100, backgroundColor: item.rgb }} />
                } 
            />
        </View>
    )
}

export default ColorScreen
