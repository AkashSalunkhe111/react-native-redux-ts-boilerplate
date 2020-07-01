import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {colors} from '../config/colors';

export default class ScreenTemplate extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.BLACK_700}}>
        {this.props.children}
      </View>
    );
  }
}
