import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cards = [
  { id: 1, image: require('../../assets/images/HomeService/bike.png'), title: 'Service (at home)', desc: 'Regular bike servicing at your doorstep.' },
  { id: 2, image: require('../../assets/images/HomeService/bike-engine.png'), title: 'Repair (at home)', desc: 'Minor repairs handled conveniently at home.' },
  { id: 3, image: require('../../assets/images/HomeService/gear.png'), title: 'Engine Repair (garage)', desc: 'Full engine diagnostics and repairs at garage.' },
  { id: 4, image: require('../../assets/images/HomeService/bikebattery.png'), title: 'Battery replacement (at home)', desc: 'Quick battery change at your location.' },
  { id: 5, image: require('../../assets/images/HomeService/accessories.png'), title: 'Accessories (at home)', desc: 'Install or upgrade accessories from home.' },
  { id: 6, image: require('../../assets/images/HomeService/checkup.png'), title: 'Doorstep checkup', desc: 'Get your bike checked before the ride.' },
  { id: 7, image: require('../../assets/images/HomeService/cleaning.png'), title: 'Cleaning and polishing (at home)', desc: 'Shine and clean your bike at home.' },
  { id: 8, image: require('../../assets/images/HomeService/tyre.png'), title: 'Tyre replacement on demand', desc: 'Instant tyre changes, no hassle.' },
  { id: 9, image: require('../../assets/images/HomeService/insurance.png'), title: 'Insurance (Online)', desc: 'Buy or renew insurance online.' },
];

const Services = () => {
  const navigation = useNavigation();

  const handleBook = (serviceName) => {
    alert(`Booking for: ${serviceName}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>Bike Services</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map((card) => (
          <View key={card.id} style={styles.bikeCard}>
            <Image source={card.image} style={styles.bikeImage} />
            <View style={styles.bikeInfo}>
              <View style={styles.bikeTopRow}>
                <Text style={styles.username}>{card.title}</Text>
              </View>
              <Text numberOfLines={2} style={styles.description}>{card.desc}</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.bookButton}
                onPress={() => handleBook(card.title)}
              >
                <Text style={styles.bookButtonText}>Book Service</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
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
  bikeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  bikeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: 10,
  },
  bikeInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bikeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#1E1E1E',
  },
  description: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  bookButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    backgroundColor: '#1E1E1E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'JosefinSans-Regular',
  },
});
