import React from 'react'
import {  TouchableOpacity } from 'react-native'
import { IconButtomHome } from '../../../assets'

const ButtomHome = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <IconButtomHome/>
        </TouchableOpacity>
    )
}

export default ButtomHome

