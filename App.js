import React from 'react';
import {Dimensions, AppRegistry, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Toolbar from './aParts/toolBarP/toolBar.js';
import BookS from './aParts/booksP/books.js';
class entry extends React.Component {
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

class Books extends React.Component {
  render() {
    return (
      <View style= {styles.container}>
        <Toolbar title= 'Books'/>
       <BookS/>
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

const RootStack = createStackNavigator({
  
  entry:entry,
  Books:Books,
  },
  {
    initialRouteName:'Books',
  },
);

export default class app extends React.Component{
  render(){
    return <RootStack />;
  }
}

AppRegistry.registerComponent('bookFinder',() => bookFinder);