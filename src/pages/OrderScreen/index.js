import React from 'react'
import { ImageBackgroundComponent, StyleSheet, Text, View } from 'react-native'
import {KopiHitam, IconMin, IconPlus, Circle, PoinCircle, CupNo, CupYes, NoCubes, OneCubes, TwoCubes, ThreeCubes} from '../../assets';
import { ArrowLeft, ButtonAdd } from '../../components/atoms';


const OrderScreen = () => {
    return (
        <View>
            <ArrowLeft/>
            <Text style={styles.textTittle}>Kopi Hitam</Text>
            <View style={styles.kopiHitam}>
                <KopiHitam/>
            </View>
            <View style={styles.totalCup}>
                <Text style={styles.textSubtittle}>Kopi Hitam</Text>
                <IconMin/>
                <IconPlus/>
            </View>
            <View style={styles.textHarga}>
                <Text style={styles.textRp}>Rp</Text>
                <Text style={styles.textMoney}>10.000</Text>
            </View>
            <View style={styles.hotCold}>
            <PoinCircle/>
                <Text style={styles.hot}>Hot</Text>
            </View>
            <View style={styles.hotCold}>
                <Circle/>
                <Text style={styles.hot}>Cold</Text>
            </View>
            <View>
                <Text style={styles.ziseTittle}>Zise</Text>
            </View>
            <View style={styles.size}>
                <CupYes/>
                <CupNo/>
            </View>
            <View style={styles.sugarRate}>
                <Text style={styles.sugar}>Sugar</Text>
                <Text style={styles.hot}>(In Cubes)</Text>
            </View>
            <View style={styles.cubes}>
               <NoCubes/>
               <OneCubes/>
               <TwoCubes/>
               <ThreeCubes/>
            </View>
            
            <ButtonAdd/>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    textTittle:{
        textAlign:'center',
        width: 152,
        height:134,
        fontSize:28,
    },
    kopiHitam:{
        alignItems: 'center',
    },
    textSubtittle:{
        width:152,
        height:34,
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
