import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import CartHistory from './CartHistory';

const Stack = createStackNavigator();


export const ProfileStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CartHistory" component={CartHistory} />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})