import React from 'react'
import { View, Text } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgSrc={require('../../assets/images/forest.jpg')} score={9} />
            <ImageDetail title="Beach" imgSrc={require('../../assets/images/beach.jpg')} score={6} />
            <ImageDetail title="Mountain" imgSrc={require('../../assets/images/mountain.jpg')} score={7} />
        </View>
    )
}

export default ImageScreen
