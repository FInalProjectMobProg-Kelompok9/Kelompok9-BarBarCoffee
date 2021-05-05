import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import {KopiHitam} from '../../assets';
import { ArrowLeft, ButtonAdd, Gap } from '../../components';


const ChartScreen = () => {
    return (
        <ScrollView>
        <View style={styles.fullPage}>

        <View>
            <Gap height={16}/>
            <ArrowLeft/>
            <Gap height={16}/>
            <View style={styles.mainTittle}>
                <Text style={styles.title}>Your </Text>
                <Text style={styles.titleCart}>Cart</Text>
            </View>
            <Gap height={50}/>
            <View style={styles.viewSubtittle}>
                <View style={styles.Count}/>
            
            <Gap width={36}/>
                <KopiHitam/>
                <Gap width={43}/>
                <Text style={styles.subTittle}>Kopi Hitam</Text>
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
                <Text style={styles.money}>10.000</Text>
            </View>
            <Gap height={33}/>
            <View style={styles.tax}>
                <Text style={styles.total}>Tax</Text>
                <Gap width={211}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.taxMoney}>1.000</Text>    
            </View>
            <Gap height={33}/>
            <View style={styles.discount}>
                <Text style={styles.total}>Discount</Text>
                <Gap width={154}/>
                <Text style={styles.rp}>Rp</Text>
                <Text style={styles.discountMoney}>-0</Text>    
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
                <Text style={styles.subTotalValue}>11.000</Text>    
            </View>
            <Gap height={33}/>
            <ButtonAdd title="Order"/>
            <Gap height={10}/>
        </View> 
        </View>
        </ScrollView>          
    )
}

export default ChartScreen

const styles = StyleSheet.create({
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
        width: 29,
        height: 31,
        paddingHorizontal: 15,
        marginTop: 83,
        alignItems:'center',
        backgroundColor:'#C08D78',
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
