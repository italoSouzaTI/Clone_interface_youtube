import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import NavigationBottom from './navigationBTS';

const src = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#272727" />
        <NavigationBottom />
      </NavigationContainer>
    </>
  );
};

export default src;
