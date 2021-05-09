import React from 'react'
import {ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import {Espresoo} from '../../assets';
import {ButtonAdd, ArrowLeft, Gap, AddAndDropCounter, AddHotCold, AddSize, AddSugarLevel, TextMenu, TextHarga, TextSize, TextSugar} from '../../components';
import firebase from '../../config/Firebase';

const OrderScreen2 = ({navigation}) => {
    const data = {
        items: 'Espresso',
        harga: 15000,
    }

    const pushDataItems = () => {
        const pushItems = firebase.database()
        .ref('Items')
        const dataItems = data

        pushItems.push(dataItems)
    }
    const onSubmit = () => {
        pushDataItems()
        navigation.navigate('ChartScreen2', {
            dataItems: data,
        })
    }
    return (
        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
        <ScrollView>
        <View>
        <View style={styles.fullPage}>
            <ArrowLeft onPress={() => navigation.navigate('MenuScreen')}/>
            <View alignItems='center'>
                <TextMenu title="Espresso"/>
            </View>
            <Gap height={40}/>
            <View style={styles.espresoo}>
                <Espresoo/>
            </View>
            <Gap height={40}/>
            <View style={styles.totalCup}>
                <TextMenu title="Espresso"/>
                <AddAndDropCounter/>
            </View>
            <Gap height={5}/>
            <TextHarga title="15.000"/>
            <Gap height={42}/>
            <AddHotCold title="Hot"/>
            <Gap height={10}/>
            <AddHotCold title="Cold"/>
            <Gap height={33}/>
            <View>
                <TextSize/>
            </View>
            <Gap height={5}/>
            <AddSize/>
            <Gap height={45}/>
            <TextSugar/>
            <Gap height={5}/>
            <AddSugarLevel/>
            <Gap height={28}/>
            <ButtonAdd title="Add to Chart" onPress={onSubmit}/>
        </View>
        </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default OrderScreen2

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    fullPage:{
        marginHorizontal:24,
        marginTop:24,
        marginBottom:15,
    },
    espresoo:{
        alignItems: 'center',
    },
    totalCup:{
        flexDirection:'row',
        alignItems:'center',

    },
})