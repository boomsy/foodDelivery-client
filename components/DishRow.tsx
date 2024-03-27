import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather"

export default function DishRow({item}) {
  return (
    <View style={tw `flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2`} >
      <Image style={tw`rounded-3xl h-20 w-20`}  source={item.image} />
      <View style={tw`flex flex-1 ml-3`} >
            <View style={tw`pl-3`} >
                  <Text style={tw`text-xl`} > {item.name} </Text>
                  <Text style={tw`text-gray-700`} > {item.description} </Text>
            </View>
            <View style={tw`flex-row justify-between pl-3 items-center`} >
                  <Text style={tw`text-gray-700 text-lg font-bold`} > 
                        ${item.prise} 
                  </Text>
                  <View style={tw`flex-row items-center`} >
                        <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1), padding: 5, borderRadius : 9999  }} >
                              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text style={tw`px-3 `}> 
                              {2} 
                        </Text>
                        <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1), padding: 5, borderRadius : 9999  }} >
                              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                  </View>
            </View>
      </View>
    </View>
  )
}
