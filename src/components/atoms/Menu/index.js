import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Menu = ({title}) => {
    return (
        <View style={styles.textMenuView}>
            <Text style={styles.textMenu}>{title}</Text>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    textMenu:{
        fontSize: 28,
        textAlignVertical: 'center',
    },
    textMenuView:{
        flexDirection: 'row',
    },
})
