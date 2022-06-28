import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/use-auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { user } = useAuth();
  return(
    <NavigationContainer>
      {user.id === undefined ? <AuthRoutes/> : <AppRoutes/>}
    </NavigationContainer>
  )
}