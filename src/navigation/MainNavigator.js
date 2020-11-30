import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {LogInStackNavigator} from './StackNavigator';
import {connect} from 'react-redux';
import Test from '../screens/Test';

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      {/* {props.authenticated ? <TabNavigator /> : <LogInStackNavigator />} */}
      {/* <TabNavigator /> */}
      <Test />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(MainNavigator);
