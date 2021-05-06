import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IconBack} from '../../../assets'

const ArrowRiht = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.lefticonBack}>
            <IconBack/>
        </View>
        </TouchableOpacity>
    )
}

export default ArrowRiht

const styles = StyleSheet.create({
    lefticonBack:{
        width:50,
        height:50,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
})