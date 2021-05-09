import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CupYes, CupNo} from '../../../assets';
import {Gap} from '../../../components';

const AddSize = () => {
  return (
    <View>
      <View style={styles.size}>
        <TouchableOpacity>
          <CupYes marginTop={14} />
        </TouchableOpacity>
        <Gap width={22} />
        <TouchableOpacity>
          <CupNo />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddSize;

const styles = StyleSheet.create({
  size: {
    flexDirection: 'row',
  },
});
