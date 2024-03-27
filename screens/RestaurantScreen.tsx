import React, { useEffect } from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native'
import tw from 'twrnc'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice'

export default function RestaurantScreen() {
  const  {params}     = useRoute()
  const  navigation   = useNavigation()
  let    item : any   = params;
  const  dispatch     = useDispatch();


  return (
    <View>
      <CartIcon  />
      <StatusBar />

      <ScrollView>

        <View style={tw `relative`} >
          <Image style={tw `w-full h-72`}  source={item.image} />
          <TouchableOpacity style={tw `absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow`} onPress={() => navigation.goBack() }>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View style={tw `bg-white -mt-12 pt-3 rounded-tl-3xl rounded-tr-3xl`}>
          <View style={tw `px-3`} >
            <Text style={tw `text-3xl font-bold`} > {item.name} </Text>

            <View style={tw `flex-row ml-3 my-1`} >
              <View style={tw `flex-row items-center ml-1 `}>
                    <Image style={tw `h-4 w-4`} source={require('../assets/images/fullStar.png')} />
                    <Text style={tw `text-xs`} >
                          <Text style={tw `text-green-700`}> {item.stars} </Text>
                          <Text style={tw `text-gray-700`}> 
                                ({item.reviews} review) . <Text style={tw `font-semibold`} > {item.category} </Text>
                          </Text>
                    </Text>
              </View>
              <View style={tw `flex-row items-center ml-1`} >
                    <Icon.MapPin color="gray" width="15" height="15" />
                    <Text style={tw `text-gray-700 text-xs`}> Nearby. {item.address} </Text>
              </View>
            </View>

            <Text style={tw `text-gray-500 mt-2`} > {item.description} </Text>
          </View>
        </View>

        <View style={tw `bg-white pb-36`} >
          <Text style={tw `px-2 py-4 text-2xl font-bold`} > Menu </Text>

          {/* Dishes */}

          {
            item.dishes.map((dish, index) => <DishRow key={index} item={{...dish}} /> )
          }

        </View>

      </ScrollView>
    </View>
  )

}
