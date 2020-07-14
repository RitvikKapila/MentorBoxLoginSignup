// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1a3c99',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Sign Up to Mentorbox' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {title: 'Log In to Mentorbox'}
//          {headerLeft: null}
        }
      />
      <Stack.Screen
       name="Dashboard"
       component={Dashboard}
       options={
         { title: 'Home Page' }
//         {headerLeft: null}
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}