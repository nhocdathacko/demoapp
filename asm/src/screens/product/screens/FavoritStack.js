import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Detail from './Detail';
import Favorit from './Favorit';
import { ProductNavigation } from '../ProductNavigation';

const Stack = createStackNavigator();

export const FavoritStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorit" component={Favorit} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="ProductNavigation" component={ProductNavigation} />
    </Stack.Navigator>
  )
}

export default FavoritStack

const styles = StyleSheet.create({})