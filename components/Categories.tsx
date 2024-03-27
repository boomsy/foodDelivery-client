import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native'
import tw from 'twrnc'
import { categories } from '../constants'

export default function Categories() {

  const [activeCategory, setActiveCategory]   = useState(null)

  return (
      <View style={ tw` mt-4 ` } >
            <ScrollView style={ tw` overflow-visible ` } 
                 horizontal showsHorizontalScrollIndicator={false}
                 contentContainerStyle={{ paddingHorizontal: 15 }} >

                  {
                        categories.map((category, index) => {

                              let isActive   = category.id == activeCategory;
                              let btnClass   = isActive ? 'bg-gray-600' : 'bg-gray-200';
                              let textClass  = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

                              return (
                                    <View  key={index} style={ tw` flex justify-center items-center mr-6 ` } >
                                          <TouchableOpacity onPress={() => setActiveCategory(category.id)}
                                                 style={ tw` p-1 rounded-full shadow bg-gray-200 ${btnClass} ` } >
                                                <Image style={ tw` w-11 h-11 ` }  source={category.image} /> 
                                          </TouchableOpacity>
                                          <Text style={ tw` text-sm  ${textClass} ` } > { category.name } </Text>
                                    </View>
                              )

                        } )

                  }

            </ScrollView>
      </View>
  )


}
