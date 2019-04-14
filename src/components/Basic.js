import React, {Component} from 'react';
import {ScrollView , Image} from 'react-native';
import Profilepic from './Profilepic';
import ButtonBasics from './Button'
import Header0 from './Heading0';
import Header1 from './Heading1';
import Header2 from './Heading2';
import Header3 from './Heading3';
import Header4 from './Heading4';
import Header5 from './Heading5';
import Header6 from './Heading6';
import Header7 from './Heading7';
import Greeting from './Style';
import BlinkApp from './State';
import PizzaTranslator from './Translator';
import LotsOfStyles from './Footer';
import FlatListBasics from './ListView' ;
import FlexDirectionBasics from './LayoutWithFlex';
class Basic extends Component {
    
    render(){
        return (
           
            <ScrollView>
            <Header0/>
            <BlinkApp/>
<Header1/>

            <Profilepic />
         <Header2/>
						<Greeting/>
<Header3/>
<LotsOfStyles/>
<Header4/>
<FlexDirectionBasics/>
<Header5/>
<PizzaTranslator/>

<Header6/>
<ButtonBasics/>
<Header7/>
<FlatListBasics/>

            </ScrollView>
            
            
            
        
        
        
        );
    }
}

export default Basic;