import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header6 extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> Press the Button </Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
       
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    
  }
});
export default Header6;