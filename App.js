/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelBox from './HotelBox'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  render() {
    const hotel = {
      image : 'https://camiloarguello.xyz/img/juliana.jpg',
      name : 'Hotel Camilo Arguello',
      stars : 4,
      price: '125.000'
    }
    return (
      <View style={styles.container}>
        <HotelBox hotel={hotel}/>
        <HotelBox hotel={hotel}/>
        <HotelBox hotel={hotel}/>
        <HotelBox hotel={hotel}/>
        <HotelBox hotel={hotel}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 50,
  }
});
