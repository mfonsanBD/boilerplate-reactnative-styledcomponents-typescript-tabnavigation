import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Login } from '../screens/Login';
import { Dashboard } from '../screens/Dashboard';

import theme from "../global/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveBackgroundColor:theme.colors.secondary,
      tabBarActiveTintColor: theme.colors.shape,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarLabelPosition: "below-icon",
      tabBarStyle: {
        padding: 20,
        height: 80,
        paddingBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      },
      tabBarLabelStyle: {
        fontFamily: theme.fonts.medium
      } }}>
      <Screen name='Login' component={Login} options={{
        tabBarIcon: (({size, color})=>(
          <Feather name="dollar-sign" size={size} color={color} />
        ))
      }}/>
      <Screen name='Dashboard' component={Dashboard} options={{
        tabBarIcon: (({size, color})=>(
          <Feather name="dollar-sign" size={size} color={color} />
        ))
      }}/>
    </Navigator>
  );
}