import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Screen/Welcome';
import Login from './src/Screen/Login';
import Signup from './src/Screen/Signup';
import HomePage from './src/Screen/HomePage';
import Verification from './src/Screen/Verification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} 
        options={
          {
          headerShown: false
          }
        }
        />
        <Stack.Screen name="Signup" component={Signup}
         options={
          {
          headerShown: false
          }
        }
        />
        <Stack.Screen name="Login" component={Login}  options={
          {
          headerShown: false
          }
        } />

<Stack.Screen name="HomePage" component={HomePage}  options={
          {
          headerShown: false
          }
        } />

<Stack.Screen name="Verification" component={Verification}  options={
          {
          headerShown: false
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
     </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#778899",
    alignItems: "center",
    justifyContent: "center",
  },
});
