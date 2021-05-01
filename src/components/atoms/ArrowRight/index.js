import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IconBack} from '../../../assets'

const ArrowRight = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.lefticonBack}>
            <IconBack/>
        </View>
        </TouchableOpacity>
    )
}

export default ArrowRight

const styles = StyleSheet.create({
    lefticonBack:{
        width:50,
        height:50,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
})