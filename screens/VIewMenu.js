//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { color, container } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const ViewMenu = ({navigation, route}) => {

    const { title, image, time, delivery, status } = route.params


    const toppings = [
        {
            id: 1, 
            toppings_name: 'Pepporoni',
            toppings_image: 'https://cdn-icons-png.flaticon.com/512/2718/2718144.png'
        },
        {
            id: 2, 
            toppings_name: 'Mushroom',
            toppings_image: 'https://freepngimg.com/thumb/mushroom/29-mushroom-png-image.png'
        },
        {
            id: 3,
            toppings_name: 'Cheese',
            toppings_image: 'https://www.gastronomiavasca.net/uploads/image/file/4417/w700_queso_rallado.jpg'
        },
        {
            id: 3, 
            toppings_name: 'Sausage',
            toppings_image: 'https://pngimg.com/d/sausage_PNG98744.png'
        },
        {
            id: 4, 
            toppings_name: 'Onion',
            toppings_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ps8sO7DMTaFsqDdXaj3xcnFR6YHG49Ew5Qm129Xz3TzMJ5-i9ElU6VXDR3ysq4nP5B0&usqp=CAU'
        },
        {
            id: 5,
            toppings_name: 'Black Olives',
            toppings_image: 'https://media.istockphoto.com/id/889068316/photo/marinated-slices-black-olives-isolated-on-white-background-top-view.jpg?s=612x612&w=0&k=20&c=0bmGCUznTx4sxp7-kobgfuVHnAEnKbc1JZ4Zs1PQo8E='
        }
    ]
    return (
        <SafeAreaView edges={['left', 'right']} style={{ flex: 1}}>

            <ScrollView contentContainerStyle={{ paddingBottom: (10/100) * container.height}}>
                <View style={{
                    flex: 0.3
                }}>
                    <Image 
                        source={{ uri: image }}
                        style={{
                            width: '100%',
                            height: (30/100) * container.height
                        }}
                        resizeMode="cover"
                    />
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{
                        width: 10,
                        height: 10,
                        backgroundColor: color.white,
                        borderRadius: 10,
                        padding: (3/100) * container.width,
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: color.primary, alignItems: 'center', textAlign: 'center'}}>{'<'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.7,
                    padding: (5/100) * container.width
                }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: (5/100) * container.width}}>{title}</Text>
                    </View>
                    <View style={{marginTop: (1/100) * container.height}}>
                        <Text style={{ fontSize: (3/100) * container.width, color: color.gray}}>
                            {delivery} • {time}
                        </Text>
                    </View>
                    {/* <View style={{marginTop: (1/100) * container.height}}>
                        <Text style={{ fontSize: (3/100) * container.width, color: color.gray}}>
                            {menu_image}
                        </Text>
                    </View> */}
                </View>

                <View style={{
                    marginTop: (1/100) * container.height,
                    paddingHorizontal: (5/100) * container.width
                }}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: (3/100) * container.width}}>Available Topings</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {
                            toppings.length > 0 && toppings.map((tops, index) => (
                                <View key={index} style={{
                                    margin: (1/100) * container.width
                                }}>
                                    <Image 
                                        source={{ uri: tops.toppings_image}}
                                        style={{
                                            width: (26/100) * container.width,
                                            height: (18/100) * container.width,
                                            backgroundColor: color.white,
                                            borderWidth: 1,
                                            borderColor: color.lightgray,
                                            borderRadius: (1/100) * container.width
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        marginTop: (1/100) * container.height,
                                        fontSize: (2.5/100) * container.width,
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}>{tops.toppings_name}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>

            </ScrollView>

            <View style={{
                width: '100%',
                position: 'absolute',
                height: (8/100) * container.height,
                backgroundColor: color.white,
                borderTopWidth: 0.5,
                borderColor: color.lightgray,
                bottom: 0,
                padding: (3/100) * container.width,
                flexDirection: 'row'
            }}>
                <View style={{ flex: 0.7}}> 
                    <TouchableOpacity style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: color.primary,
                        padding: (2/100) * container.width,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: (1/100) * container.width
                    }}>
                        <Text style={{ color: color.white, fontSize: (2.5/100) * container.width, textAlignVertical: 'center', fontWeight: 'bold'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image 
                        source={{ uri: 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png' }}
                        style={{
                            width: (7/100) * container.width,
                            height: (7/100) * container.width
                        }}
                        resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    },
});

//make this component available to the app
export default ViewMenu;
