/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigation from './src/config/Navigation';
import { DrawerContent } from './src/screens/DrawerContent';
import CompaniesScreen from './src/screens/CompaniesScreen';
import StudentScreen from './src/screens/StudentScreen';
import VacanciesScreen from './src/screens/VacanciesScreen';
import CompanyFormScreen from './src/screens/CompanyFormScreen'
import RootStackScreen from './src/screens/RootStackScreen';
import { AuthContext } from './src/components/Context';
import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();

const App = () =>{
  return (
    // <PaperProvider theme={theme}>
    // <AuthContext.Provider value={AuthContext}>
    <NavigationContainer>
      {/* { loginState.userToken !== null ? ( */}
        
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        {/* <Drawer.Screen name="rootstackscreen" component={RootStackScreen} /> */}
          <Drawer.Screen name="HomeDrawer" component={AppNavigation} />
          <Drawer.Screen name="VacanciesScreen" component={VacanciesScreen} />
          <Drawer.Screen name="CompaniesScreen" component={CompaniesScreen} />
          <Drawer.Screen name="StudentScreen" component={StudentScreen} />
          {/* <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
        </Drawer.Navigator>
      {/* )
    :
      <RootStackScreen/>
    } */}
    </NavigationContainer>
    // </AuthContext.Provider>
    // </PaperProvider>
  );
}

export default App;