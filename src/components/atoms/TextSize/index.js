import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextSize = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>Size</Text>
        </View>
    )
}

export default TextSize

const styles = StyleSheet.create({
    text:{
        fontSize:24,
    },
})
