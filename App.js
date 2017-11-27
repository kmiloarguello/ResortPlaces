/**
 * created by CAMILO ARGUELLO
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {request} from 'graphql-request'
import {Stack,Scene,Router} from 'react-native-router-flux'
import HomeView from './src/HomeView'
import HotelDetailView from './src/HotelDetailView'

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeView}/>
          <Scene key="hotelDetail" component={HotelDetailView} />
        </Stack>
      </Router>
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
