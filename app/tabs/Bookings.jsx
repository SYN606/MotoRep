import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import services from '../../dummy/dummy';

const Bookings = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => console.log(`${item.name} booked!`)}
          >
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>Book Now</Text>
        </View>
      </View>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
    paddingHorizontal: 16,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 25,
    color: '#1E1E1E',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#A6C6D8',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  details: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
