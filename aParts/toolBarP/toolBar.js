import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Toolbar extends React.Component {
    static defautProps= {title:'BookFinder'}
  render() {
    return (
      <View style ={styles.toolView}>
        <Text style ={styles.toolText}>{this.props.title}</Text>
        
      </View>
    );
  }
}
const styles =StyleSheet.create({
    toolView: {
        backgroundColor: 'rgb(133,175,110)',
        padding:10,
    },
    toolText:{
        color:'rgb(88,78,76)',
        textAlign: 'center',
    },
});


AppRegistry.registerComponent('ToolBar',()=> Toolbar);