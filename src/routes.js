import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/home/home'
import VideoDetail from './screens/moviesAndTv/videoDetail'

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}