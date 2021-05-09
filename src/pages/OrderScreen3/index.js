import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Cappuccino} from '../../assets';
import {
  ButtonAdd,
  ArrowLeft,
  Gap,
  AddAndDropCounter,
  AddHotCold,
  AddSize,
  AddSugarLevel,
  TextMenu,
  TextHarga,
  TextSize,
  TextSugar,
} from '../../components';
import firebase from '../../config/Firebase';

const OrderScreen3 = ({navigation}) => {
  const data = {
    items: 'Cappuccino',
    harga: 13000,
  };

  const pushDataItems = () => {
    const pushItems = firebase.database().ref('Items');
    const dataItems = data;

    pushItems.push(dataItems);
  };
  const onSubmit = () => {
    pushDataItems();
    navigation.navigate('ChartScreen3', {
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
              <TextMenu title="Capuccino" />
            </View>
            <Gap height={40} />
            <View style={styles.cappuccino}>
              <Cappuccino />
            </View>
            <Gap height={40} />
            <View style={styles.totalCup}>
              <TextMenu title="Capuccino" />
              <AddAndDropCounter />
            </View>
            <Gap height={5} />
            <TextHarga title="13.000" />
            <Gap height={42} />
            <AddHotCold title="Hot" />
            <Gap height={10} />
            <AddHotCold title="Cold" />
            <Gap height={33} />
            <TextSize />
            <Gap height={5} />
            <AddSize />
            <Gap height={45} />
            <TextSugar />
            <Gap height={5} />
            <AddSugarLevel />
            <Gap height={28} />
            <ButtonAdd title="Add to Chart" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OrderScreen3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  fullPage: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 15,
  },
  cappuccino: {
    alignItems: 'center',
  },
  totalCup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
