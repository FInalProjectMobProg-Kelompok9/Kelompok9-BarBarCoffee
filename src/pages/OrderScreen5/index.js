import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import {KopiHitam, IconMin, IconPlus, Circle, PoinCircle, CupNo, CupYes, NoCubes, OneCubes, TwoCubes, ThreeCubes, Mochaccino, Espresoo, Cappuccino, Bakpao} from '../../assets';
import {ButtonAdd, ArrowLeft, Gap} from '../../components';


const OrderScreen5 = ({navigation}) => {
    return (

        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
        <ScrollView>
        <View>
        <View style={styles.fullPage}>
            <ArrowLeft onPress={() => navigation.navigate('MenuScreen')}/>
            <View style={styles.viewTextKopiHitam}>
                <Text style={styles.textTittle}>Bakpao</Text>
            </View>
            <Gap height={40}/>
            <View style={styles.kopiHitam}>
                <Bakpao/>
            </View>
            <Gap height={40}/>
            <View style={styles.totalCup}>
                <Text style={styles.textSubtittle}>Bakpao</Text>
                <Gap width={110}/>
                <IconPlus marginTop={8}/>
                <Gap width={12}/>
                <Text style={styles.counter}>1</Text>
                <Gap width={12}/>
                <IconMin/>
            </View>
            <Gap height={5}/>
            <View style={styles.textHarga}>
                <Text style={styles.textRp}>Rp</Text>
                <Text style={styles.textMoney}>6.000</Text>
            </View>
            <Gap height={42}/>
            <View style={styles.hotCold}>
            <PoinCircle/>
            <Gap width={20}/>
                <Text style={styles.hot}>Kacang</Text>
            </View>
            <Gap height={10}/>
            <View style={styles.hotCold}>
                <Circle/>
                <Gap width={20}/>
                <Text style={styles.hot}>Temo</Text>
            </View>
            <Gap height={10}/>
            <View style={styles.hotCold}>
                <Circle/>
                <Gap width={20}/>
                <Text style={styles.hot}>Unti</Text>
            </View>
            <Gap height={150}/>
            <ButtonAdd/>
        </View>
        </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default OrderScreen5

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
    counter:{
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
    hot:{
       
        color:'#C08D78',
        fontSize:24,
    },
    hotCold:{
        flexDirection:'row',
    },
    ziseTittle:{
        fontSize:24,
        fontWeight:'400',
    },
    size:{
        flexDirection:'row',
    },
    sugar:{
        color:'#000000',
        fontSize:24,
    },
    sugarRate:{
        flexDirection:'row',
    },
    cubes:{
        flexDirection:'row',
    },
    
})