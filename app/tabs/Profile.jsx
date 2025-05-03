import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Function to scale font size based on screen width
const scaleFontSize = (size) => {
  const baseWidth = 375; // Base width for iPhone 8
  const scale = width / baseWidth;
  return Math.round(size * scale);
};

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 20} // Adjust offset as needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1561948954-7e2edb21fa24',
            }}
            style={styles.profileImage}
          />
        

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
              returnKeyType="done"
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#D6E6F2",
    padding: width > 400 ? 20 : 15,
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: "white",
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#000A26',
  }
  ,
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    color: '#444',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
});
