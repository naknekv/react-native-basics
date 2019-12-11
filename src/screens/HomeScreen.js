import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button title="Go to Components Demo" onPress={() => navigate("Components")} />
      <Button title="Go to List Demo" onPress={() => navigate("List")} />
      <Button title="Go to Images Demo" onPress={() => navigate("Images")} />
      <Button title="Go to Counter Demo" onPress={() => navigate("Counter")} />
      <Button title="Go to Colors Demo" onPress={() => navigate("Colors")} />
      <Button title="Go to Square Demo" onPress={() => navigate("Square")} />
      <Button title="Go to Text Demo" onPress={() => navigate("Text")} />
      <Button title="Go to Box Demo" onPress={() => navigate("Box")} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
