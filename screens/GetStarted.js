//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, NativeModules, TouchableOpacity, Image, TextInput } from 'react-native';
import { color, container, fontsize } from '../constants';

const { StatusBarManager } = NativeModules;

// create a component
const GetStarted = () => {

	const [active_menu, set_active_menu] = useState("")
	const menu_categories = [
		{
			id: 1,
			title: 'Filters',
			activeIcon: require("../assets/filter-active.png"),
			inactiveIcon: require("../assets/filter-inactive.png")
		},
		{
			id: 2,
			title: 'Pizza',
			activeIcon: require("../assets/pizza-active.png"),
			inactiveIcon: require("../assets/pizza-inactive.png")
		},
		{
			id: 3,
			title: 'Burgers',
			activeIcon: require("../assets/burger-active.png"),
			inactiveIcon: require("../assets/burger-inactive.png")
		},
		{
			id: 4,
			title: 'Asian',
			activeIcon: require("../assets/noodles-active.png"),
			inactiveIcon: require("../assets/noodles-inactive.png")
		},
		{
			id: 5,
			title: 'Hot dog',
			activeIcon: require("../assets/hotdog-active.png"),
			inactiveIcon: require("../assets/hotdog-inactive.png")
		},
		{
			id: 6,
			title: 'Cakes',
			activeIcon: require("../assets/cake-activew.png"),
			inactiveIcon: require("../assets/cake-inactive.png")
		},
	]

	const menu = [
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
		{
			id: 3,
			menu_title: 'Pizza Hut',
			menu_image: 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/1-CZM3R7EVEYWETN/hero/dd41a48856de447994d95a27c2c6d7bf_1679629724532751170.webp',
			menu_time: '35 - 40 min',
			menu_delivery: 'Delivery from RM2.00'
		},
		{
			id: 4,
			menu_title: `US Pizza`,
			menu_image: 'data:image/jpeg;base64,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',
			menu_time: '35 - 40 min',
			menu_delivery: 'Delivery from RM3.00'
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
					
					<ScrollView style={{ paddingBottom: (10/100) * container.height}} contentContainerStyle={{ paddingBottom: (10/100) * container.height}} showsVerticalScrollIndicator={false}>
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
								<View style={{ paddingTop: (1/100) * container.height}}> 
									{
										menu.length > 0 && menu.map((item, index) => 
										<TouchableOpacity key={index} style={{marginBottom: (3/100) * container.height}}>
											<View style={{ borderRadius: (2/100) * container.width, borderWidth: 0.5, borderColor: color.inactive}}>
												<Image 
												source={{ uri: item.menu_image}}
												style={{
													width: '100%',
													height: (15/100) * container.height,
													borderTopLeftRadius: (2/100) * container.width,
													borderTopRightRadius: (2/100) * container.width
												}}
												resizeMode="stretch"
												/>
												<View style={{padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
													<View>
														<Text style={{fontWeight: 'bold'}}>{item.menu_title}</Text>
														<Text style={{fontSize: 9, color: 'gray'}}>{item.menu_time} • {item.menu_delivery}</Text>
													</View>
													<View>
														<Image 
														source={require('../assets/heart.png')}
														style={{
															width: (5/100) * container.width,
															height: (5/100) * container.width
														}}
														/>
													</View>
												</View>
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
					source={require("../assets/menu-white.png")}
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
					source={require("../assets/bell-white.png")}
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
			source={require('../assets/main-iocn-active.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.primary}}>Main</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{alignItems: 'center'}}>
			<Image 
			source={require('../assets/shop-inactive.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.inactive}}>Shop</Text>
		</TouchableOpacity>
		<TouchableOpacity style={{alignItems: 'center'}}>
			<Image 
			source={require('../assets/cart-inactive.png')}
			style={{
				width: (5/100) * container.width,
				height: (5/100) * container.width
			}}
			/>
			<Text style={{fontSize: fontsize.regular, marginTop: 5, color: color.inactive}}>Cart</Text>
		</TouchableOpacity>
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
export default GetStarted;
