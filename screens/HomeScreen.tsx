import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import { featured } from '../constants'
import FeaturedRow from '../components/FeaturedRow'


export default function HomeScreen() {
  return (
      <SafeAreaView style={ tw` bg-white ` } >

            <StatusBar  />

            {/* Search bar */}


            <View style={ tw` flex-row items-center ml-3 px-4 pb-2 gap-x-1 ` }>

                  <View style={ tw` flex-row flex-1 items-center p-3 rounded-full border border-gray-300 mt-2` }>
                        <Icon.Search height="25" width="25" stroke="gray" />
                        <TextInput placeholder='Restaurants' style={ tw` ml-2 flex-1 ` } />
                        <View style={ tw` flex-row items-center ml-1 border-0 border-l-2 pl-2 border-gray-200 ` } >
                              <Icon.MapPin height="20" width="20" stroke="gray" />
                              <Text style={ tw`text-gray-600` } >  New York </Text>
                        </View>
                  </View>

                  <View  style= {{backgroundColor: themeColors.bgColor(1), padding : 12 , borderRadius: 50 }} >
                        <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                  </View>

            </View> 


            {/* main */}

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20}}>

                  {/* categories */}
                  <Categories />


                  {/* featured */}
                  <View  style={ tw` mt-5 ` } >
                        {
                              [featured, featured, featured].map((item, index) => {
                                    return (
                                          <FeaturedRow 
                                                key={index}
                                                title={item.title}
                                                restaurants={item.restaurants}
                                                description={item.description}
                                          />
                                    )
                              })
                        }
                  </View>

            </ScrollView>

          
      </SafeAreaView>
  )
}
