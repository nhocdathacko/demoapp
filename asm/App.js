import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/screens/navigation/Navigation'
import { UserContextProvider } from './src/screens/user/UserContext';
import { ProductContextProvider } from './src/screens/product/ProductContext';







export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Navigation />
      </ProductContextProvider>
    </UserContextProvider>
  );
}


