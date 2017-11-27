import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelList from './HotelList'
//import { getallHotels }  from './src/api-client'
import {request} from 'graphql-request'
import HotelBox from './HotelBox'


export default class HotelDetailView extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <HotelBox hotel={this.props.hotel} /> 
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
