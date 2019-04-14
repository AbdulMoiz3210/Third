import React, {Component} from 'react';
import {Text , View , StyleSheet} from 'react-native';


class Header1 extends Component{
    render() {
     return (
         <View style={styles.container}> 
        <Text style = {styles.name}> Props Image</Text>
        </View> 
      );           
    } 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(211, 100%, 50%, 0.5)',
    
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    
  }
});
export default Header1;