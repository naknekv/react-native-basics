import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 32},
        { name: "Friend #2", age: 12},
        { name: "Friend #3", age: 53},
        { name: "Friend #4", age: 21},
        { name: "Friend #5", age: 24},
        { name: "Friend #6", age: 18},
        { name: "Friend #7", age: 34},
        { name: "Friend #8", age: 54},
        { name: "Friend #9", age: 23}
    ]
    
    return (
        <FlatList 
            data={friends} 
            keyExtractor={friend => friend.name}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => 
                <View style={styles.viewStyle}>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>{item.age}</Text>
                </View>
            } 
        />
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 30
    }
})


export default ListScreen
