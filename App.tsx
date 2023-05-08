//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, NativeModules, TouchableOpacity, Image, TextInput } from 'react-native';
import { color, container, fontsize } from './constants';

const { StatusBarManager } = NativeModules;

// create a component
const App = () => {

	const [active_menu, set_active_menu] = useState("")
	const menu_categories = [
		{
			id: 1,
			title: 'Filters',
			activeIcon: require("./assets/filter-active.png"),
			inactiveIcon: require("./assets/filter-inactive.png")
		},
		{
			id: 2,
			title: 'Pizza',
			activeIcon: require("./assets/pizza-active.png"),
			inactiveIcon: require("./assets/pizza-inactive.png")
		},
		{
			id: 3,
			title: 'Burgers',
			activeIcon: require("./assets/burger-active.png"),
			inactiveIcon: require("./assets/burger-inactive.png")
		},
		{
			id: 4,
			title: 'Asian',
			activeIcon: require("./assets/noodles-active.png"),
			inactiveIcon: require("./assets/noodles-inactive.png")
		},
		{
			id: 5,
			title: 'Hot dog',
			activeIcon: require("./assets/hotdog-active.png"),
			inactiveIcon: require("./assets/hotdog-inactive.png")
		},
		{
			id: 6,
			title: 'Cakes',
			activeIcon: require("./assets/cake-activew.png"),
			inactiveIcon: require("./assets/cake-inactive.png")
		},
	]

	const menu = [
		{
			cat_id: 1,
			cat_title: 'Pizza',
			menu: [
				{
					id: 1,
					menu_title: 'Papa John',
					menu_image: 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/08/0/0/Papa-Johns-Dragon-Flame_pizza_dragon-hand.jpg?ve=1&tl=1',
					menu_time: '35 - 40 min',
					menu_delivery: 'Delivery from RM2.00'
				},
				{
					id: 2,
					menu_title: `Domino's`,
					menu_image: 'https://static.wixstatic.com/media/60364e_0f2807e5fec74ee69ed254e13d3b849d~mv2.jpg/v1/fill/w_640,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/60364e_0f2807e5fec74ee69ed254e13d3b849d~mv2.jpg',
					menu_time: '35 - 40 min',
					menu_delivery: 'Delivery from RM3.00'
				},
			]
		}
	]

	useEffect(() => {
		
	}, [])

	return (
		<View style={{ flex: 1, backgroundColor: color.white}}>
			<StatusBar backgroundColor={color.primary} />
			<HeaderDashboard />
			<View style={{ flex: 1, backgroundColor: color.primary}}>
				<View style={{ 
					height: (82/100) * container.height, 
					backgroundColor: color.white, 
					paddingHorizontal: (5/100) * container.width,
					paddingTop: (1/100) * container.height,
					borderTopLeftRadius: (3/100) * container.width,
					borderTopRightRadius: (3/100) * container.width
				}}>
					
					<ScrollView>
						<View style={{ padding: (1/100) * container.width}}>
							<ScrollView horizontal showsHorizontalScrollIndicator={false}> 
								{
									menu_categories.length > 0 && menu_categories.map((data, index) => 
									<TouchableOpacity key={index} style={{ marginRight: (4/100) * container.width, alignItems: 'center'}} onPress={() => set_active_menu(data.title)}>
										<View style={{ 
											padding: (3/100) * container.width,
											backgroundColor: active_menu === data.title ? color.white : '#f5f5f5',
											borderRadius: (1/100) * container.width,
											borderWidth: 0.5,
											borderColor: '#d4d4d4'
										}}>
											<Image 
											source={active_menu === data.title ? data.activeIcon : data.inactiveIcon}
											style={{
												width: (7/100) * container.width,
												height: (7/100) * container.width
											}}
											/>
										</View>
										<View style={{paddingTop: (1/100) * container.height}}>
											<Text style={{fontWeight: 'bold', fontSize: fontsize.small, color: active_menu === data.title ? color.primary : color.black}}>{data.title}</Text>
										</View>
									</TouchableOpacity>)
								}
							</ScrollView>

							<View style={{ marginTop: (3/100) * container.height}}>
								<View>
									<Text style={{fontWeight: 'bold', fontSize: fontsize.extra_large, color: color.black}}>Menu</Text>
								</View>
								<View>
									{
										menu.length > 0 && menu.map((item, index) => 
										<TouchableOpacity key={index}>
											<View style={{ borderRadius: (1/100) * container.width, borderWidth: 0.5, borderColor: color.inactive}}>
												
											</View>
										</TouchableOpacity>)
									}
								</View>
							</View>
						</View>
					</ScrollView>

				</View>
			</View>
			<FooterDashboard />
		</View>
	);
};

const FooterDashboard = () => (
	<View style={{
		position: 'absolute',
		width: '100%',
		height: (9/100) * container.height,
		bottom: 0,
		backgroundColor: color.white,
		borderTopWidth: 0.5,
		borderColor: '#d4d4d4',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: (1/100) * container.height
	}}>
		<TouchableOpacity style={{alignItems: 'center'}}>
			<Image 
			source={require('./assets/main-iocn-active.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.primary}}>Main</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{alignItems: 'center'}}>
			<Image 
			source={require('./assets/shop-inactive.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.inactive}}>Shop</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{alignItems: 'center'}}>
			<Image 
			source={require('./assets/cart-inactive.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.inactive}}>Cart</Text>
		</TouchableOpacity>
	</View>
)

const HeaderDashboard = () => (
	<View style={{ 
		backgroundColor: color.primary, 
		padding: (5/100) * container.width, 
		paddingTop: StatusBarManager.HEIGHT * 1.1,
		//borderBottomLeftRadius: (5/100) * container.width,
		//borderBottomRightRadius: (5/100) * container.width
	}}>
		<View style={{ flexDirection: 'row', alignItems: 'center'}}>
			<View style={{flex: 0.1}}>
				<TouchableOpacity>
					<Image 
					source={require("./assets/menu-white.png")}
					style={{
						width: (5/100) * container.width,
						height: (5/100) * container.width
					}}
					/>
				</TouchableOpacity>
			</View>
			<View style={{flex: 0.8, alignItems: 'center', paddingHorizontal: (1/100) * container.width}}>
				<Text style={{ fontWeight: 'bold', fontSize: fontsize.regular, color: color.white}}>No 11, Bandar Tasik Selatan 57000</Text>
				<Text style={{ fontSize: fontsize.extra_small, color: color.white}}>toyyibPay Sdn. Bhd.</Text>
			</View>
			<View style={{flex: 0.1, alignItems: 'flex-end'}}>
				<TouchableOpacity>
					<Image 
					source={require("./assets/bell-white.png")}
					style={{
						width: (5/100) * container.width,
						height: (5/100) * container.width
					}}
					/>
				</TouchableOpacity>
			</View>
		</View>
		<View style={{ marginTop: (3/100) * container.height}}>
			<TextInput 
			placeholder='Search'
			placeholderTextColor={color.white}
			style={{
				color: color.white,
				fontSize: fontsize.regular,
				padding: (3/100) * container.width,
				backgroundColor: '#9f1239',
				borderRadius: (2/100) * container.width
			}}
			/>
		</View>
	</View>
)

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.white,
	},
});

//make this component available to the app
export default App;
