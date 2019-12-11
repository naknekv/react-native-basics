import React, { useState } from 'react'
import { View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return (
        <View>
            <ColorCounter title="Red" color={red} setColor={setRed} />
            <ColorCounter title="Green" color={green} setColor={setGreen} />
            <ColorCounter title="Blue" color={blue} setColor={setBlue} />
            <View style={{ height: 500, width: 500, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

export default SquareScreen
