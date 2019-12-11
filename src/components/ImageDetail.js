import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetail = ({ title, imgSrc, score }) => {
    console.log()
    return (
        <View>
            <Image source={imgSrc} />
            <Text>{title}</Text>
            <Text>Score - {score}</Text>
        </View>
    )
}

export default ImageDetail
