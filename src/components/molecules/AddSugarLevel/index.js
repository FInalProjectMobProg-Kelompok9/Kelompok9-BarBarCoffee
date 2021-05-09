import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NoCubes, OneCubes, TwoCubes, ThreeCubes} from '../../../assets';
import {Gap} from '../../../components';

const AddSugarLevel = () => {
  return (
    <View style={styles.cubes}>
      <TouchableOpacity>
        <NoCubes marginTop={18} />
      </TouchableOpacity>
      <Gap width={25} />
      <TouchableOpacity>
        <OneCubes marginTop={23} />
      </TouchableOpacity>
      <Gap width={25} />
      <TouchableOpacity>
        <TwoCubes marginTop={22} />
      </TouchableOpacity>
      <Gap width={25} />
      <TouchableOpacity>
        <ThreeCubes />
      </TouchableOpacity>
    </View>
  );
};

export default AddSugarLevel;

const styles = StyleSheet.create({
  cubes: {
    flexDirection: 'row',
  },
});
