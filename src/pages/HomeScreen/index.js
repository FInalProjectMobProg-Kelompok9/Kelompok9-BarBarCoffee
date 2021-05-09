import React, {useState} from 'react'
import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native'
import { IconBack, Logo } from '../../assets';
import { Button, TextInput, } from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const HomeScreen = ({navigation}) => {
    const [tableNumber, setTableNumber] = useState('')

    const pushTableNumber = () =>{
        const data ={
            tableNumber: tableNumber
        };
        if (tableNumber === '') {
            showMessage({
              message: 'Please add the table number',
              type: 'default',
              backgroundColor: '#D9435E', 
              color: 'white', 
            });
        }
        else {
            const pushData = firebase.database().ref('tableNumber');
            const tableNumber = data

            pushData
                .push(tableNumber);
                setTableNumber('')
                navigation.navigate('MenuScreen');
                Alert.alert('BarBarCoffee', 'Silahkan Memesan')
        }
    }

    const onSubmit = () => {
        pushTableNumber()
    }
    return (
        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
            <Logo style={styles.logo}/>
            <View style={styles.viewText}>
                <Text style={styles.text1}>BarBar </Text>
                <Text style={styles.text2}>Coffee</Text>
            </View>
            <TextInput placeholder="Table Number" keyboardType={'number-pad'} value={tableNumber} onChangeText={value => setTableNumber(value)}/>
            <Button title="Menu" onPress={onSubmit}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFEBCD',
        alignItems: 'center',
        flex: 1,
    },
    text1:{
        fontFamily: 'Sen-Regular',
        fontSize: 28,
        color: '#C08D78'
    },
    text2:{
        fontFamily: 'Sen-Regular',
        fontSize: 28,
        color: 'black'
    },
    viewText:{
        flexDirection:'row',
    },
    logo:{
        marginTop: 134,
    },
})

export default HomeScreen;