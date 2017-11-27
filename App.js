/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelList from './src/HotelList'
//import { getallHotels }  from './src/api-client'
import {request} from 'graphql-request'


export default class App extends Component<{}> {
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
        <HotelList hotel={hotel}/>
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
