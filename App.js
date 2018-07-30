import React from 'react';
import {Dimensions, AppRegistry, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Toolbar from './aParts/toolBarP/toolBar.js';
export default class App extends React.Component {
  render() {
    return (
      <View style= {styles.container}>
        <Toolbar title= 'BookFinder'/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor: "#cccccc",
    height: Dimensions.get('window').height,
     },
});


AppRegistry.registerComponent('bookFinder',() => bookFinder);