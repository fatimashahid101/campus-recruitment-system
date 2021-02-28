import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StudentScreen from '../screens/StudentScreen';
import VacanciesScreen from '../screens/VacanciesScreen';
import CompaniesScreen from '../screens/CompaniesScreen'
// import DonorsScreen from '../screens/DonorsScreen';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
function AppNavigation(){
  return(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    // barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Vacancies"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Vacancies',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Companies"
      component={AboutStackScreen}
      options={{
        tabBarLabel: 'Companies',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Students"
      component={StudentScreen}
      options={{
        tabBarLabel: 'Students',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Donors list"
      component={DonorsScreen}
      options={{
        tabBarLabel: 'Donors list',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
  );
}
export default AppNavigation;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Vacancies" component={VacanciesScreen} options={{
          title:'Vacancies',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="blue" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HomeStack.Navigator>
  );
  
  const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <AboutStack.Screen name="Companies" component={CompaniesScreen} options={{
            title:'Companies',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="blue" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </AboutStack.Navigator>
  );