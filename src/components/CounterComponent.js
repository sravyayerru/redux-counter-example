import React, { Component } from 'react';
import {View,Button,Text} from 'react-native';

class CounterComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View >
                <Button 
                onPress={this.props.increment}
                title='INC'
                />
              <Text>{this.props.count}</Text>  
                 <Button 
                onPress={this.props.decrement}
                title='DEC'
                />

            </View>
        );
    }
}

export default CounterComponent;