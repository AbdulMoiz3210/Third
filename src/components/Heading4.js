import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header4 extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> Layout With Flexbox </Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    
  }
});
export default Header4;