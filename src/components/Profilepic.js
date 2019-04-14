import React, {Component} from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://hips.hearstapps.com/esq.h-cdn.co/assets/15/22/2048x1024/landscape-1432927104-mclaren-p1.jpg?resize=980:*'
    };
    return (
      <Image source={pic} style={{width: 380, height: 110}}/>
    );
  }
}
