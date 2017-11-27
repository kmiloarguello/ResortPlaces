
import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelBox from './HotelBox'

export default class HotelList extends Component<{}> {
  render() {
    return (
      <FlatList 
        data={this.props.hotel}
        keyExtractor={(item,index) => index}
        renderItem={({item}) => <HotelBox hotel={item} /> }
      />
    );
  }
}

