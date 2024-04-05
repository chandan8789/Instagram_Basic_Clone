import {StyleSheet, Text, View} from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './components/HomePage';
import PorductDetails from './components/PorductDetails';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={HomePage} />
        <Stack.Screen name="Products" component={PorductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
