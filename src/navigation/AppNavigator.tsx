import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ResumeScreen from '../screens/ResumeScreen';
import ListingsScreen from '../screens/ListingsScreen';
import SkillMatchScreen from '../screens/SkillMatchScreen';
import TipsScreen from '../screens/TipsScreen';
import QuizScreen from '../screens/QuizScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
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