// Index.android.js place code in here for IOS

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

// Render it to the devise
AppRegistry.registerComponent('albums', () => App);
