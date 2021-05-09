import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextSugar = () => {
    return (
        <View style={styles.viewSugarRate}>
            <Text style={styles.textSugar}>Sugar</Text>
            <Text style={styles.textInCubes}> (In Cubes)</Text>
        </View>
    )
}

export default TextSugar

const styles = StyleSheet.create({
    textSugar:{
        color:'#000000',
        fontSize:24,
    },
    textInCubes:{
       
        color:'#C08D78',
        fontSize:24,
    },
    viewSugarRate:{
        flexDirection:'row',
    },
})
