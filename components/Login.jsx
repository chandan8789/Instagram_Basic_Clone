import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Instagram() {
  const navigation = useNavigation();
  const route = useRoute();
  const {emailss, passwordField} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === emailss && password === passwordField) {
      navigation.navigate('Homepage');
    } else {
      Alert.alert('Invalid details', 'Please');
      return;
    }
  };

  return (
    <LinearGradient
      colors={['#f9ce34', '#ee2a7b', '#6228d7']}
      style={styles.container}>
      <View>
        <Text style={styles.lang}>English</Text>
      </View>
      <View>
        <Text style={styles.names}>Instagram</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Phone number, email or Username"
            placeholderTextColor="#999"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={{marginTop: 25, height: 50}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleLogin}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forgot}>
            Forgot your login details? Get help signing in.
          </Text>
        </View>
        <View>
          <Text style={styles.facebook}>Log in with Facebook</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              marginTop: 20,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
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
    // marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
  names: {
    fontSize: 40,
    marginTop: 50,
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
