import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Menu = () => {
    return (
        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
            <View style={styles.textView}>
                <Text style={styles.text1}>It's Great a </Text>
                <Text style={styles.text2}>Day for Coffee</Text>
            </View>
        </ImageBackground>
    )
}

export default Menu

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    text1:{
        fontWeight: '700',
        fontSize: 36,
    },
    text2:{
        fontWeight: '700',
        fontSize: 36,
    },
    textView:{
        flexDirection: 'row',
    }
})
