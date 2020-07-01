import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {Text, Icon} from 'react-native-elements';
import ScreenTemplate from './ScreenTemplate';

export default class Home extends PureComponent {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Icon name="menu" type="simple-line-icon" color="#517fa4" />
    ),
  };

  render() {
    return (
      <ScreenTemplate>
        <Text>Home Screen</Text>
        <Icon
          name="close"
          type="simple-line-icon"
          color="#517fa4"
          // style={[styles.icon, {tintColor: tintColor}]}
        />
      </ScreenTemplate>
    );
  }
}
