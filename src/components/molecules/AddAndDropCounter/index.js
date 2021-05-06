import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {IconMin, IconPlus} from '../../../assets'
import {Gap} from '../../../components'

const AddAndDropCounter = () => {
    return (
        <View style={styles.viewCounter}>
            <TouchableOpacity>
            <IconPlus marginTop={5}/>
            </TouchableOpacity>
                <Gap width={12}/>
                <Text style={styles.counter}>1</Text>
                <Gap width={12}/>
                <TouchableOpacity>
                <IconMin/>
                </TouchableOpacity>
        </View>
    )
}

export default AddAndDropCounter

const styles = StyleSheet.create({
    counter:{
        fontSize:28,
    },
    viewCounter:{
        flexDirection:'row',
    }
})
