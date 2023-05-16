//import liraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GetStarted from './screens/GetStarted';
import ViewMenu from './screens/VIewMenu';
import { collection, db, getDocs, query, where } from './firebase';


const Stack 	= createNativeStackNavigator()
const Tab 		= createBottomTabNavigator()

// create a component
const App = () => {

	useEffect(() => {
		testFirestore();
	}, [])

	const testFirestore = async () => {
		try {
            const q = query(collection(db, "user"));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.log('No documents found with email: ');
                return;
            }

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {
            console.log(error);
        }
	};

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
