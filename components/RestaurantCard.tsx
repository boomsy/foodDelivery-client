import React from 'react'
import { Text, View , Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import tw from 'twrnc'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({item}) {

      const navigation = useNavigation();

      return (

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {...item})}>
                  <View style= { styles.viewStyle } >
                        <Image style={tw `h-36 w-64 rounded-t-3xl`} source={item.image} />
                        <View style={tw `px-3 pb-4 mt-2`} >
                              <Text style={tw `text-lg font-bold pt-2`} > {item.name} </Text>
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
                  </View>
            </TouchableWithoutFeedback>
      )

}


const styles = StyleSheet.create({
      viewStyle : {
        shadowColor: themeColors.bgColor(2.0),
        shadowRadius: 7,
        marginRight: 20,
        marginBottom: 12,
        backgroundColor: '#FFF',
        borderRadius: 24,
        shadowOpacity: 0.43,
        textShadowRadius: 9.51,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 8,
        }
      }
});