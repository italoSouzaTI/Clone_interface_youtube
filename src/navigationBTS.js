import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Layout
import Start from '../src/Start';
import Explore from '../src/Explore';
import Subscribers from '../src/Subscribers';
import Inbox from '../src/Inbox';
import Libery from '../src/Libery';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsMIcon from 'react-native-vector-icons/MaterialIcons';
import IconsMCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, ContainerBagde, Bagde} from '../src/Components/badge';

const Tab = createBottomTabNavigator();
// import or Icons libery
const icons = {
  Start: {
    lib: IconsEntypo,
    name: 'home',
  },
  Explore: {
    lib: IconsMIcon,
    name: 'explore',
  },
  Subscribers: {
    lib: IconsMCIcon,
    name: 'youtube-subscription',
  },
  Inbox: {
    lib: IconsMIcon,
    name: 'email',
  },
  Libery: {
    lib: IconsMCIcon,
    name: 'animation-play',
  },
};
function Badge({name, count, color, size}) {
  return (
    <Container>
      <IconsMIcon name={name} size={size} color={color} count={9} />
      <ContainerBagde>{count > 0 && <Bagde>{count}</Bagde>}</ContainerBagde>
    </Container>
  );
}
const navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Start"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name} = icons[route.name];
          if (route.name === 'Inbox') {
            return <Badge name="email" color={color} size={size} count={3} />;
          }
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#272727',
          borderTopColor: '#2e2e2e',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#939393',
      }}>
      <Tab.Screen name="Start" component={Start} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subscribers" component={Subscribers} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Libery" component={Libery} />
    </Tab.Navigator>
  );
};

export default navigation;
