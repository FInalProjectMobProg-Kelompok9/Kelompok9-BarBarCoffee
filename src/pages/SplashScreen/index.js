import React, {useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Logo, Background} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(() => { 
            navigation.replace('HomeScreen');   
        }, 3000);
    })
    
    return (
        <ImageBackground source ={require('../../assets/icons/haya.jpg')} style={styles.page}>
            <Logo/>
            <View style={styles.viewText}>
                <Text style={styles.text1}>BarBar </Text>
                <Text style={styles.text2}>Coffee</Text>
            </View>
            
        </ImageBackground>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text1:{
        fontFamily: 'Sen-Regular',
        fontSize: 36,
        color: '#C08D78'
    },
    text2:{
        fontFamily: 'Sen-Regular',
        fontSize: 36,
        color: 'black'
    },
    viewText:{
        flexDirection:'row',
    }
});
