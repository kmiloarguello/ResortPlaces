import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HotelBox extends Component<{}> {

  render() {

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width - 20;

    const { image , name , stars , price } = this.props.hotel;

    return (
        <View style={styles.hotelbox}>
          <Image style={{height: imageHeight, width: imageWidth}} source={{ uri: image }} />

          <View style={styles.info}>
            <View style={styles.infoContainerLeft}>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.row}>
                {Array(stars).fill().map(
                  (t,i) => <Icon key={i} name="star-border" size={30} color='#ffcc08' />
                )}
              </View>
            </View>
            <View style={styles.infoContainerRight}>
              <Text style={styles.perNight}>Precio por Noche</Text>
              <Text style={styles.price}>COP {price}</Text>
            </View>
          </View>
          
        </View>
    );
  }
}


const styles = StyleSheet.create({
  hotelbox: {
    backgroundColor: '#FFF',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset:{
        height: 1,
        width:-2
    },
    elevation: 4
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
