import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header2 extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> Height And Width</Text>
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
export default Header2;