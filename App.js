/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/routes'
import Home from './src/screens/home/home'

export class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        {MyStack()}
      </NavigationContainer>
      
    )
  }
}

export default App;
