import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Circle} from '../../../assets'
import {Gap} from '../../../components'

const AddHotCold = ({title}) => {
    return (
        <View>
            <View style={styles.hotCold}>
            <TouchableOpacity>
                <Circle/>
            </TouchableOpacity>
                <Gap width={20}/>
                <Text style={styles.hot}>{title}</Text>
            </View>
        </View>
    )
}

export default AddHotCold

const styles = StyleSheet.create({
    hot:{
       
        color:'#C08D78',
        fontSize:24,
    },
    hotCold:{
        flexDirection:'row',
    },
})
