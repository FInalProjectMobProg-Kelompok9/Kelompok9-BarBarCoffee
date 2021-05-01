import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo, IconBack, Espresoo} from '../../../assets'
import ArrowRight from '../ArrowRight';
import Gap from '../Gap'

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
