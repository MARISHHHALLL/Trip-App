/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import AuthProvider, {AuthContext} from './src/context';

function App(): React.JSX.Element {
  const {userToken} = useContext(AuthContext);
  console.log(userToken);
  return (
    <AuthProvider>
      <NavigationContainer>
        {false ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
