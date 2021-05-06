import React from 'react'
import { StyleSheet, Text, View ,TextInput as TextInputRN} from 'react-native'

const TextInput = ({title, placeholder}) => {
    return (
        <View>
            <TextInputRN style={styles.input} placeholder={placeholder} keyboardType ='numeric'/>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#C08D78',
        borderRadius: 5,
        width: 193,
        height: 43,
        marginTop: 83,
        textAlign: 'center'
    }
})
