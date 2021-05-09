import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import {Espresoo, KopiHitam, Mochaccino} from '../../assets';
import { ArrowLeft, ButtonAdd, Gap } from '../../components';

const ChartScreen = ({navigation}) => {
    return (

        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
        <ScrollView>
        <View style={styles.fullPage}>
        <View>
            <Gap height={16}/>
            <ArrowLeft onPress={() => navigation.navigate('MenuScreen')}/>
            <Gap height={16}/>
            <View style={styles.mainTittle}>
                <Text style={styles.title}>Your </Text>
                <Text style={styles.titleCart}>Cart</Text>
            </View>
            <Gap height={50}/>
            <View style={styles.viewSubtittle}>
                <View style={styles.Count}>
                    <Text>1</Text>
                </View>
            <Gap width={36}/>
                <Mochaccino/>
                <Gap width={36}/>
                <Text style={styles.subTittle}>Mochaccino</Text>
            </View>
            <Gap height={50}/>
            <View>
            <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,}}/>
            </View>
            <Gap height={33}/>
            <View style={styles.cartTotal}>
                <Text style={styles.total}>Cart Total </Text>
                <Gap width={137}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.money}> 13.000</Text>
            </View>
            <Gap height={33}/>
            <View style={styles.tax}>
                <Text style={styles.total}>Tax</Text>
                <Gap width={211}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.taxMoney}> 1.300</Text>    
            </View>
            <Gap height={33}/>
            <View style={styles.discount}>
                <Text style={styles.total}>Discount</Text>
                <Gap width={154}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.discountMoney}> -</Text>    
            </View>
            <Gap height={73}/>
            <View>
            <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,}}/>
            </View>
            <Gap height={33}/>
            <View style={styles.subTotal}>
                <Text style={styles.total}>Subtotal</Text>
                <Gap width={162}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.subTotalValue}> 14.300</Text>    
            </View>
            <Gap height={33}/>
            <ButtonAdd title="Order" onPress={() => navigation.navigate('EndScreen')}/>
            <Gap height={10}/>
        </View> 
        </View>
        </ScrollView>
        </ImageBackground>
    )
}

export default ChartScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    fullPage:{
        marginHorizontal:24,
    },
    mainTittle:{
        flexDirection:'row',
        justifyContent:'center',
    },
    title:{
        fontSize:36,
    },
    titleCart:{
        fontSize:36,
        color:'#C08D78',
    },
    viewSubtittle:{
        flexDirection:'row',
        alignItems:'center',

    },
    Count:{
        borderWidth: 1,
        borderColor: '#C08D78',
        borderRadius: 5,
        width: 30,
        height: 30,
        marginTop: 83,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white',
        marginBottom:75,
        
    },
    subTittle:{
        fontSize:28,
        textAlignVertical:'center',
    },
    cartTotal:{
        flexDirection:'row',
    },
    total:{
        fontSize:24,
        color:'#C08D78',
    },
    rp:{
        fontSize:24,
        color:'#C08D78',
    },
    money:{
        fontSize:24,
    },
    tax:{
        flexDirection:'row',
    },
    taxMoney:{
        fontSize:24,
    },
    discount:{
        flexDirection:'row',
    },
    discountMoney:{
        fontSize:24,
    },
    subTotal:{
        flexDirection:'row',
    },
    subTotalValue:{
        fontSize:24,
    },
    
})