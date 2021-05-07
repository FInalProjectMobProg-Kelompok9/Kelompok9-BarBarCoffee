import React from 'react'
import {ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import {Espresoo} from '../../assets';
import {ButtonAdd, ArrowLeft, Gap, AddAndDropCounter, AddHotCold, AddSize, AddSugarLevel} from '../../components';


const OrderScreen2 = ({navigation}) => {
    return (

        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
        <ScrollView>
        <View>
        <View style={styles.fullPage}>
            <ArrowLeft onPress={() => navigation.navigate('MenuScreen')}/>
            <View style={styles.viewTextKopiHitam}>
                <Text style={styles.textTittle}>Espresso</Text>
            </View>
            <Gap height={40}/>
            <View style={styles.kopiHitam}>
                <Espresoo/>
            </View>
            <Gap height={40}/>
            <View style={styles.totalCup}>
                <Text style={styles.textSubtittle}>Espresso</Text>
                <Gap width={120}/>
                <AddAndDropCounter/>
            </View>
            <Gap height={5}/>
            <View style={styles.textHarga}>
                <Text style={styles.textRp}>Rp</Text>
                <Text style={styles.textMoney}>15.000</Text>
            </View>
            <Gap height={42}/>
            <AddHotCold title="Hot"/>
            <Gap height={10}/>
            <AddHotCold title="Cold"/>
            <Gap height={33}/>
            <View>
                <Text style={styles.ziseTittle}>Size</Text>
            </View>
            <Gap height={5}/>
            <AddSize/>
            <Gap height={45}/>
            <View style={styles.sugarRate}>
                <Text style={styles.sugar}>Sugar</Text>
                <Text style={styles.inCubes}> (In Cubes)</Text>
            </View>
            <Gap height={5}/>
            <AddSugarLevel/>
            <Gap height={28}/>
            <ButtonAdd title="Add to Chart" onPress={() => navigation.navigate('ChartScreen')}/>
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
    viewTextKopiHitam:{
        alignItems:'center',
    },
    textTittle:{
        textAlign:'center',
        fontSize:28,
    },
    kopiHitam:{
        alignItems: 'center',
    },
    textSubtittle:{
        fontSize:28,
    },
    textRp:{
        width:30,
        height:29,
        fontWeight: '400',
        fontSize:24,
        color:'#C08D78',
    },
    textMoney:{
        fontWeight:'400',
        fontSize:24,
        textAlignVertical:'bottom',
    },
    textHarga:{
        flexDirection:'row',
        height:50,
    },
    totalCup:{
        flexDirection:'row',
        alignItems:'center',

    },
    ziseTittle:{
        fontSize:24,
        fontWeight:'400',
    },
    sugar:{
        color:'#000000',
        fontSize:24,
    },
    inCubes:{
       
        color:'#C08D78',
        fontSize:24,
    },
    sugarRate:{
        flexDirection:'row',
    },
    
})