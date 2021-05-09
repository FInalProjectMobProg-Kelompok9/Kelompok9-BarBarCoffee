import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextHarga = ({title}) => {
    return (
        <View style={styles.viewTextHarga}>
            <Text style={styles.textRp}>Rp</Text>
            <Text style={styles.textMoney}>{title}</Text>
        </View>
    )
}

export default TextHarga

const styles = StyleSheet.create({
    textRp:{
        fontWeight: '400',
        fontSize:24,
        color:'#C08D78',
    },
    textMoney:{
        fontWeight:'400',
        fontSize:24,
        textAlignVertical:'bottom',
    },
    viewTextHarga:{
        flexDirection:'row',
        height:50,
    },
})
