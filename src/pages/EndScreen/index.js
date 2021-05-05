import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { IconDone } from '../../assets';
import { ButtomHome, Gap } from '../../components';

const OrderScreen = () => {
    return (
        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
            <View>
                <Gap height={70}/>
                <View>
                    <Text style={styles.text1}>Thank You For</Text>
                    <Text style={styles.text2}>Ordering !</Text>
                </View>
                <Gap height={70}/>
                <View style={styles.IconDoneView}>
                    <IconDone/>
                </View>
                <Gap height={70}/>
                <Text style={styles.text3}>Please Wait</Text>
                <Gap height={70}/>
                <Text style={styles.text4}>Notes :</Text>
                <Text style={styles.text4}>
                    Untuk pembayaran silahkan langsung ke kasir dengan menunjukkan kwitansi pembayaran yang muncul diperangkat anda
                </Text>
                <Gap height={70}/>
                <View style={styles.IconButtomView}>
                    <ButtomHome/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    text1:{
        fontSize: 36,
        textAlign: 'center',
    },
    text2:{
        fontSize: 36,
        textAlign: 'center',
        color: '#C08D78',
    },
    IconDoneView:{
        alignItems: 'center',
    },
    text3:{
        fontSize: 28,
        textAlign: 'center',
    },
    text4:{
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    IconButtomView:{
        alignItems: 'center',
    }
    
})