import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Cup } from '../../../assets';

const ButtonToCart = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.buttomView}>
                <Cup/>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonToCart

const styles = StyleSheet.create({
    buttomView:{
        alignItems: 'center',
        backgroundColor: '#C08D78',
        height: 70,
        marginTop: 40,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingBottom: 50,
        marginHorizontal: 24,
    },
})
