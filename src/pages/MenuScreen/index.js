import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Background, Bakpao, Cappuccino, Cup, Espresoo, IconBack, KopiHitam, Logo, Mochaccino } from '../../assets';
import { ArrowRight, Gap, Menu } from '../../components'

const MenuScreen = ({onPress}) => {
    return (
        <ImageBackground source={require('../../assets/icons/haya.jpg')} style={styles.page}>
            <ScrollView>
                <View style={styles.fullPage}>
                    <View style={styles.textView}>
                        <Text style={styles.text1}>It's Great a </Text>
                        <Text style={styles.text2}>Day for</Text>
                    </View>
                    <Text style={styles.text3}>Coffee</Text>
                    <Gap height={29}/>
                    <Text style={styles.text4}>Menu : </Text>
                    <View style={styles.menuView}>
                        <Espresoo/>
                        <Gap width={25}/>
                        <Menu title = "Espresoo"/>
                        <Gap width={91}/>
                        <ArrowRight/>
                    </View>
                    <Gap height={29}/>
                    <View style={styles.menuView}>
                        <Cappuccino/>
                        <Gap width={25}/>
                        <Menu title = "Capucciono"/>
                        <Gap width={58}/>
                        <ArrowRight/>
                    </View>
                    <Gap height={29}/>
                    <View style={styles.menuView}>
                        <KopiHitam/>
                        <Gap width={55}/>
                        <Menu title = "Kopi Hitam"/>
                        <Gap width={66}/>
                        <ArrowRight/>
                    </View>
                    <Gap height={29}/>
                    <View style={styles.menuView}>
                        <Mochaccino/>
                        <Gap width={57}/>
                        <Menu title = "Mochaccino"/>
                        <Gap width={49}/>
                        <ArrowRight/>
                    </View>
                    <Gap height={29}/>
                    <View style={styles.menuView}>
                        <Bakpao/>
                        <Gap width={23}/>
                        <Menu title = "Bakpao"/>
                        <Gap width={104}/>
                        <ArrowRight/>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <View style={styles.buttomView}>
                    <Cup/>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    fullPage:{
        marginLeft: 24,
    },
    text1:{
        fontWeight: '700',
        fontSize: 36,
        color: 'black'
    },
    text2:{
        fontWeight: '700',
        fontSize: 36,
        color: '#C08D78',
    },
    text3:{
        fontWeight: '700',
        fontSize: 36,
        color: '#C08D78',
    },
    text4:{
        fontWeight: 'normal',
        fontSize: 36,
    },  
    textView:{
        marginTop: 47,
        flexDirection: 'row',
    },
    menuView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttomView:{
        alignItems: 'center',
        backgroundColor: '#C08D78',
        height: 70,
        marginTop: 40,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingBottom: 50,
        marginHorizontal: 24,
    },
})
