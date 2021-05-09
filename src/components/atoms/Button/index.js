import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.box}>
        <Text style={styles.tul}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  box: {
    height: 43,
    width: 193,
    backgroundColor: '#B98068',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderRadius: 5,
    marginTop: 20,
  },
  tul: {
    fontSize: 18,
    color: 'black',
  },
});
