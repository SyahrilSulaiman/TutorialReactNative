//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GetStarted from './screens/GetStarted';
import ViewMenu from './screens/VIewMenu';


const Stack 	= createNativeStackNavigator()
const Tab 		= createBottomTabNavigator()

// create a component
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false}}>
				<Stack.Screen name='GetStarted' component={GetStarted} />
				<Stack.Screen name='ViewMenu' component={ViewMenu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default App;
