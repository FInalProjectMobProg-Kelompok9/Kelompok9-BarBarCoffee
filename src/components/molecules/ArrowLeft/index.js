import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconBackLeft} from '../../../assets';

const ArrowLeft = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.lefticonBack}>
        <IconBackLeft />
      </View>
    </TouchableOpacity>
  );
};

export default ArrowLeft;

const styles = StyleSheet.create({
  lefticonBack: {
    width: 50,
    height: 50,
  },
});
