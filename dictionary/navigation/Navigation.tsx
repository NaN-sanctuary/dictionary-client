import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddWordScreen from '../screens/AddWordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Dictionary', headerShown: false}}
        />
        <Stack.Screen
          name="AddWord"
          component={AddWordScreen}
          options={{ title: 'Add Word' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
