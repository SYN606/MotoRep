import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ mobile: '', email: '' });

  const handleMobileChange = (text) => {
    setMobileNumber(text);
    setEmail('');
    setErrors({ mobile: '', email: '' });

    if (text.length === 0) return;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(text)) {
      setErrors((prev) => ({ ...prev, mobile: 'Mobile number must be 10 digits' }));
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setMobileNumber('');
    setErrors({ mobile: '', email: '' });

    if (text.length === 0) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setErrors((prev) => ({ ...prev, email: 'Enter a valid email address' }));
    }
  };

  const handleLogin = () => {
    if (mobileNumber === '' && email === '') {
      setErrors({
        mobile: 'Enter mobile number or email',
        email: 'Enter mobile number or email',
      });
      return;
    }

    if (mobileNumber !== '') {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobileNumber)) {
        setErrors({ ...errors, mobile: 'Mobile number must be 10 digits' });
        return;
      }

      // Navigate to OTP page with mobile
      router.push({
        pathname: '/otp',
        params: { type: 'mobile', value: mobileNumber },
      });
      return;
    }

    if (email !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrors({ ...errors, email: 'Enter a valid email address' });
        return;
      }

      // Navigate to OTP page with email
      router.push({
        pathname: '/otp',
        params: { type: 'email', value: email },
      });
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}
      >
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Please sign in to your account</Text>

        <TextInput
          style={[styles.input, errors.mobile && styles.inputError]}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          value={mobileNumber}
          onChangeText={handleMobileChange}
          keyboardType="phone-pad"
          editable={email === ''}
        />
        {errors.mobile !== '' && <Text style={styles.error}>{errors.mobile}</Text>}

        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={mobileNumber === ''}
        />
        {errors.email !== '' && <Text style={styles.error}>{errors.email}</Text>}

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signupText} onPress={() => router.push('/SignUp')}>
            Don't have an account? <Text style={styles.signupLink}>Sign up here</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Or log in with</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
              <FontAwesome5 name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
              <Icon name="apple" size={28} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 28,
    color: '#222',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    fontFamily: 'JosefinSans-Regular',
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#000A26',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  signupLink: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: '600',
  },
  socialLoginContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  socialLoginText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
  },
});
