import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'
import { Key } from 'react-native-feather'

export default function FeaturedRow({title, description, restaurants}) {
  return (
      <View>
            <View style={ tw`flex-row justify-between items-center px-4 ` } >
                  <View>
                        <Text style={ tw`font-bold text-lg`} > {title} </Text>
                        <Text  style={ tw`text-gray-500 text-xs px-1`} >
                              {description}
                        </Text>
                  </View>
                  <TouchableOpacity>
                        <Text style= {{ color: themeColors.text, fontWeight: '600' }}  > See all </Text>
                  </TouchableOpacity>
            </View>

            <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                        paddingHorizontal: 15
                  }}
                  style={tw`overflow-visible py-5`}>

                        {
                              restaurants.map((restaurant, index) => {
                                    return (
                                          <RestaurantCard
                                                key={index} 
                                                item={restaurant}
                                          />
                                    )
                              })
                        }

            </ScrollView>
      </View>
  )
}
