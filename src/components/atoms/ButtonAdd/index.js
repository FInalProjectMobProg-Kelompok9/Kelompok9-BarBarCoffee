import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonAdd = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.Button}>
                <Text style={styles.text4}>Add to Chart</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonAdd

const styles = StyleSheet.create({
    Button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C08D78',
        height:46,
        borderRadius:16,
        marginHorizontal:100,
    },
    text4:{
       fontSize:24,
       color:'white',
    }
})