import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Otp = () => {
  const { value: identifier, type, isSignup } = useLocalSearchParams();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  const handleOtpChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('OTP Entered:', otpValue);
      if (isSignup === 'true' || isSignup === true) {
        navigation.navigate('UserProfile');
      } else {
        navigation.navigate('UserProfile');
      }
    } else {
      alert('Enter a valid 6-digit OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>
        OTP has been sent to your {type === 'mobile' ? 'mobile number' : 'email'}:{' '}
        <Text style={styles.identifier}>{identifier}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            value={digit}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleSubmit}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="tools" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Verify OTP</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'JosefinSans-Regular',
    marginBottom: 10,
    textAlign: 'center',
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
    marginBottom: 25,
    textAlign: 'center',
    color: '#555',
  },
  identifier: {
    fontFamily: 'JosefinSans-Regular',
    color: '#000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    fontFamily: 'JosefinSans-Regular',
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'JosefinSans-Regular',
  },
});
