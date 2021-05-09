import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TextMenu = ({title}) => {
    return (
        <>
            <Text style={styles.textTittle}>{title}</Text>
        </>
    )
}

export default TextMenu

const styles = StyleSheet.create({
    textTittle:{
        fontSize: 28,
    },
})
