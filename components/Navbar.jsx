import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>MotoRep</Text>
      <Ionicons name="menu" size={28} color="#fff" style={styles.icon} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 65,
    backgroundColor: '#000A26',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 5,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, 
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: Dimensions.get('window').width < 350 ? 18 : 20,  
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10,  
  },
});
