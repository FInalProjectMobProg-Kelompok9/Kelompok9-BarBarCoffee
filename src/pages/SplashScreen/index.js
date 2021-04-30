import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Logo,Background, Background1, bg1} from '../../assets';

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Logo/>
            <View style={styles.viewText}>
                <Text style={styles.text1}>BarBar </Text>
                <Text style={styles.text2}>Coffee</Text>
            </View>
            
        </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFEBCD',
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
