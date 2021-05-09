import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../../components';

const AddAndDropCounter = () => {
  return (
    <View style={styles.viewCounter}>
      <View style={styles.viewIcon}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faMinus} size={15}/>
        </TouchableOpacity>
      </View>
      <Gap width={12} />
      <Text style={styles.counter}>1</Text>
      <Gap width={12} />
      <View style={styles.viewIcon}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPlus} size={15}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAndDropCounter;

const styles = StyleSheet.create({
  counter: {
    fontSize: 28,
  },
  viewCounter: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
  },
  viewIcon:{
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: '#CF9775'
  }
});
