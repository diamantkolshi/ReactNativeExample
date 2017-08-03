// Index.android.js place code in here for IOS

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
  <Header />
);

// Render it to the devise
AppRegistry.registerComponent('albums', () => App);
