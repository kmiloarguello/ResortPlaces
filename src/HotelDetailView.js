import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelList from './HotelList'
//import { getallHotels }  from './src/api-client'
import {request} from 'graphql-request'


export default class HotelDetailView extends Component<{}> {
  constructor(){
    super()
    this.state = {
      hotels : []
    }
  }
  componentDidMount(){
    const query = `
    
    {
        allHotels{
            name
            stars
            image
            price
        }
    }
    
    `;

    request('https://hotel-api-km.herokuapp.com/graphql',query)
      .then( data => {
        this.setState({
          hotels: data.allHotels
        })
      })

  }
  render() {
    const hotel = this.state.hotels
    return (
      <View style={styles.container}>
        <HotelBox hotel={hotel} />
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
