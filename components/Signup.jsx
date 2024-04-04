import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function Instagram() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const showData = () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }
    navigation.navigate('Login', {
      emailss: email,
      passwordField: password,
    });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <LinearGradient
      colors={['#f9ce34', '#ee2a7b', '#6228d7']}
      style={styles.container}>
      <Text style={styles.lang}>English</Text>

      <View>
        <Text style={styles.names}>Instagram</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number, email or Username"
          placeholderTextColor="#999"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={showData}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            User Already Exist{' '}
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, color: 'white'}}
            onPress={showData}>
            Login
          </Text>
        </View>
        <Text style={styles.forgot}>
          Forgot your login details? Get help signing in.
        </Text>
        <Text style={styles.facebook}>Log in with Facebook</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  lang: {
    color: 'white',
    fontSize: 20,
  },
  names: {
    fontSize: 40,
    marginTop: 40,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 60,
    width: 350,
    marginTop: 30,
    borderRadius: 3,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#333',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 3,
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgot: {
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    fontSize: 15,
  },
  facebook: {
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },
});
