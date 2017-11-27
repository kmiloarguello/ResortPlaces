
import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelBox from './HotelBox'

export default class HotelList extends Component<{}> {

  render() {
    const hotel = {
      image : 'https://camiloarguello.xyz/img/juliana.jpg',
      name : 'Hotel Camilo Arguello',
      stars : 4,
      price: '125.000'
    }
    return (
      <FlatList 
        data={Array(20).fill(hotel)}
        renderItem={({item}) => <HotelBox hotel={hotel}/>}
      />
    );
  }
}

