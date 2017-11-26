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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  render() {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width - 20;

    const image = 'https://camiloarguello.xyz/img/juliana.jpg';
    const name = 'Hotel Camilo Arguello'
    const stars = 4

    return (
      <View style={styles.container}>
        <View style={styles.hotelbox}>
          <Image style={{height: imageHeight, width: imageWidth}} source={{ uri: image }} />

          <View style={styles.info}>
            <View style={styles.infoContainerLeft}>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.row}>
                <Icon name="star-border" size={30} color='#ffcc08' />
                <Icon name="star-border" size={30} color='#ffcc08' />
                <Icon name="star-border" size={30} color='#ffcc08' />
              </View>
            </View>
            <View style={styles.infoContainerRight}>
              <Text style={styles.perNight}>Precio por Noche</Text>
              <Text style={styles.price}>COP 135.000</Text>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}

{/* <View style={styles.info}>
<Text style={styles.name}>{name}</Text>
<Icon name="star-border" size={30} color='#900' />
<Text>{stars}</Text>
</View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 50,
  },
  hotelbox: {
    backgroundColor: '#FFF',
    margin: 10,
    alignItems: 'center',
    borderRadius:10
  },
  image:{
    width: 200,
    height: 200
  },
  info:{
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name:{
    color: 'black',
    fontSize: 18
  },
  row:{
    flexDirection: 'row'
  },
  infoContainerLeft:{
    flex:2,
    alignItems: 'flex-start'
  },
  infoContainerRight:{
    flex:1,
    alignItems: 'flex-end'
  },
  perNight:{
    marginTop: 5
  },
  price:{
    fontSize: 20,
    color: '#ffcc08'
  }
});
