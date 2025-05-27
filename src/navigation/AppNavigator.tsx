import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeScreen from '../screens/ResumeScreen';
import ListingsScreen from '../screens/ListingsScreen';
import SkillMatchScreen from '../screens/SkillMatchScreen';
import TipsScreen from '../screens/TipsScreen';
import QuizScreen from '../screens/QuizScreen';
import LoginPage from '../screens/login_page';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Resume" component={ResumeScreen} />
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="Skill Match" component={SkillMatchScreen} />
        <Stack.Screen name="Interview Tips" component={TipsScreen} />
        <Stack.Screen name="Quizzes" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;