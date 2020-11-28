import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import ArtistFilter from '../screens/components/ArtistFilter';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ArtistFilter" component={ArtistFilter} />
    </Stack.Navigator>
  );
};
export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export const ImageViewStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ImageView">
      <Stack.Screen name="ImageView" component={ImageView} />
    </Stack.Navigator>
  );
};
export const LogInStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
