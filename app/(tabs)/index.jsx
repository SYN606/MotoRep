import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar'; // Path to Navbar
import Home from '../../components/Home';

import {useFonts} from 'expo-font';

export default function HomeScreen() {
  const [loaded] = useFonts({
    'JosefinSans-Regular': require('../../assets/fonts/JosefinSans-Regular.ttf'),
  });
  
  if(!loaded){
    return null;
  }
  return (
    <View style={styles.container}>
      <Navbar />
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
