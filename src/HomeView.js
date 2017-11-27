import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HotelList from './HotelList'
//import { getallHotels }  from './src/api-client'
import {request} from 'graphql-request'
import { SearchBar } from 'react-native-elements'


export default class HomeView extends Component<{}> {
  constructor(){
    super()
    this.state = {
      hotels : []
    }
  }
  componentDidMount(){
    //console.disableYellowBox = true;
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
  findHotelByName(text){
    const query = `
    
    {
        hotelByName(name: ${text}){
            name
            stars
            image
            price
        }
    }
    
    `
   request('https://hotel-api-km.herokuapp.com/graphql',query)
      .then( data => {
        this.setState({
          hotels: data.hotelByName
        })
      }) 
  }
  render() {
    const hotel = this.state.hotels
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 50, borderColor:'#ccc', borderWidth: 1}}
          onEndEditing={text => this.findHotelByName(text)}
          placeholder='Buscar Hotel por nombre...'
        />
        <HotelList hotel={hotel}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  input:{
    height: 40,
    borderColor: 'gray',
     borderWidth: 1
  }
});
