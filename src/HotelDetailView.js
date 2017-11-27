import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelList from './HotelList'
import {request} from 'graphql-request'
import HotelBoxDetail from './HotelBoxDetail'


export default class HotelDetailView extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <HotelBoxDetail hotel={this.props.hotel} /> 
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
