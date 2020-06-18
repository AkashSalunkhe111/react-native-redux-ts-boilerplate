import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {dummyAction} from '../redux/actions';

const DummyComponent = ({dispatch}) => {
  dispatch(dummyAction());
  return (
    <>
      <Text>Dummy Text</Text>
    </>
  );
};

export default connect()(DummyComponent);
