import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Bakpao} from '../../assets';
import {
  ButtonAdd,
  ArrowLeft,
  Gap,
  AddAndDropCounter,
  AddHotCold,
  TextMenu,
  TextHarga,
} from '../../components';
import firebase from '../../config/Firebase';

const OrderScreen5 = ({navigation}) => {
  const data = {
    items: 'Espresso',
    harga: 6000,
  };

  const pushDataItems = () => {
    const pushItems = firebase.database().ref('Items');
    const dataItems = data;

    pushItems.push(dataItems);
  };
  const onSubmit = () => {
    pushDataItems();
    navigation.navigate('ChartScreen5', {
      dataItems: data,
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/icons/haya.jpg')}
      style={styles.page}>
      <ScrollView>
        <View>
          <View style={styles.fullPage}>
            <ArrowLeft onPress={() => navigation.navigate('MenuScreen')} />
            <View alignItems="center">
              <TextMenu title="Bakpao" />
            </View>
            <Gap height={40} />
            <View style={styles.bakpao}>
              <Bakpao />
            </View>
            <Gap height={40} />
            <View style={styles.totalCup}>
              <TextMenu title="Bakpao" />
              <AddAndDropCounter />
            </View>
            <Gap height={5} />
            <TextHarga title="6.000" />
            <Gap height={42} />
            <AddHotCold title="Kacang" />
            <Gap height={10} />
            <AddHotCold title="Temo" />
            <Gap height={10} />
            <AddHotCold title="Unti" />
            <Gap height={150} />
            <ButtonAdd title="Add to Chart" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OrderScreen5;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  fullPage: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 15,
  },
  bakpao: {
    alignItems: 'center',
  },
  totalCup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
