import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconBack} from '../../../assets';

const ArrowRight = ({onPress}) => {
  return (
    <View style={styles.viewArrow}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.lefticonBack}>
          <IconBack />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ArrowRight;

const styles = StyleSheet.create({
  lefticonBack: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewArrow: {
    justifyContent: 'center',
  },
});
