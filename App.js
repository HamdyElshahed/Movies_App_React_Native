import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import RouteComponent from './src/route/route';
import { MovieContextCom } from './src/state_mang/context/context';
export default function App() {
  return (
    <MovieContextCom>
      <NativeBaseProvider>
        <RouteComponent />
      </NativeBaseProvider>
    </MovieContextCom>
    
  );
}

