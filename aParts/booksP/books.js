import React from 'react';
import {AppRegistry, Text, StyleSheet, Text, View } from 'react-native';

export default class BookS extends React.Component {
    consructor(){
        super();
            this.state ={
                text:''
            }
    }

    onTextChange(text){
        this.setState({
         text:text
        }, function(){
           console.log(this.state.text);
           //@TODO -fetchBooks() 
        });
    }
    static defautProps= {title:'BookFinder'}
  render() {
    return (
      <View style = {styles.container}>
        <TextInput
        style={styles.textInput}
        placeholder ='Title Search'
        value ={this.state.text}
        onChangeText={(text)=> this.onTextChange(text)}
        />
        <Text>Books part</Text>
        
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


AppRegistry.registerComponent('BookS',()=> BookS);