import React, {useCallback} from 'react';
import {Icons} from '../assets/icons';
import {COLORS} from '../constant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/home/ExploreScreen';
import CommunityScreen from '../screens/home/CommunityScreen';

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const tabBarIconExplorer = useCallback(({focused}: {focused: boolean}) => {
    return (
      <Icons.ExplorerIcon fill={focused ? COLORS.primary : COLORS.secondary} />
    );
  }, []);
  const tabBarIconCommunity = useCallback(({focused}: {focused: boolean}) => {
    return (
      <Icons.UsersIcon fill={focused ? COLORS.primary : COLORS.secondary} />
    );
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Explore"
        options={{
          tabBarIcon: tabBarIconExplorer,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarActiveTintColor: 'black',
        }}
        component={ExploreScreen}
      />
      <Tab.Screen
        name="community"
        options={{
          tabBarIcon: tabBarIconCommunity,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarActiveTintColor: 'black',
        }}
        component={CommunityScreen}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
