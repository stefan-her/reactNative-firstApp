/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/containers/home/home';
import About from './src/containers/about/about';
const Tabs = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Acceuil" component={Home} />
          <Tabs.Screen name="About" component={About} />
        </Tabs.Navigator>
      </NavigationContainer>

      
    </SafeAreaView>
  );
};



export default App;
