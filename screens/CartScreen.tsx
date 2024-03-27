import React from 'react'
import tw from 'twrnc'
import { themeColors } from '../theme'
import { featured } from '../constants'
import { TouchableOpacity, View , StyleSheet, Text, Image, ScrollView} from 'react-native'
import * as Icon from "react-native-feather"
import { useNavigation} from '@react-navigation/native'


export default function CartScreen() {
  const restaurant  = featured.restaurants[0]   
  const navigation  = useNavigation();

  return (
    <View style={tw `bg-white flex-1 mt-2`} >
      {/* Back button */}

      <View style={tw `relative py-4 shadow-sm`}  >
            <TouchableOpacity style={ styles.touchStyle } onPress={() => navigation.goBack()} >
                  <Icon.ArrowLeft strokeWidth={3} stroke="white" />
            </TouchableOpacity>
            <View>
                  <Text style={tw `text-center font-bold text-xl `}> Your cart </Text>
                  <Text style={tw `text-center text-gray-500 `}> {restaurant?.name} </Text>
            </View>
      </View>

       {/* delivery time */}

       <View style={ styles.viewStyle }>
            <Image source={require('../assets/images/bikeGuy.png')} style={tw `w-20 h-20 rounded-full`}  />
            <Text style={tw `flex-1 pl-4`}> Deliver in 20-30 minutes </Text>
            <TouchableOpacity>
                  <Text style={{fontWeight : '700', color: themeColors.text}}>
                        Change 
                  </Text>
            </TouchableOpacity>
       </View>

      {/* dishes */}

      <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}} style={tw`bg-white pt-5`}>
            {
                  restaurant.dishes.map((dish, index) => {
                        return (
                              <View key={index} 
                                    style={tw`flex-row items-center ml-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg `}>
                                    <Text style={{ color: themeColors.text, fontWeight : '700' }}> 2 * </Text>
                                    <Image style={tw`h-14 w-14 rounded-full`} source={dish.image} />
                                    <Text style={tw`flex-1 font-bold text-gray-700`}> {dish.name} </Text>
                                    <Text style={tw`font-semibold text-base`}> ${dish.price} </Text>
                                    <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1), padding: 4,  borderRadius: 9999 }}>
                                          <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                    </TouchableOpacity>
                              </View>
                        )
                  })
            }
      </ScrollView>


      {/* totals */}

      
      <View  style={styles.totalStyle} >
            <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-gray-700`} > Subtotal </Text>
                  <Text style={tw`text-gray-700`} > $20 </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-gray-700`} > Delivery </Text>
                  <Text style={tw`text-gray-700`} > $2 </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-gray-700 font-extrabold`} > Oder Total </Text>
                  <Text style={tw`text-gray-700 font-extrabold`} > $22 </Text>
            </View>
            <View>
                  <TouchableOpacity 
                        onPress={() => navigation.navigate('OrderPrepairing')}
                        style={{  backgroundColor: themeColors.bgColor(1), padding : 12, borderRadius: 9999}}>
                        <Text style={tw`text-white text-center font-bold text-lg`}>
                              Place Order
                        </Text>
                  </TouchableOpacity>
            </View>
      </View >

    </View>
  )

}


const styles = StyleSheet.create({
      touchStyle : {
        backgroundColor: themeColors.bgColor(1),
        position: 'absolute',
        
        padding: 4,
        zIndex: 10,
        top: 35, 
        left: 8,

        borderRadius: 9999,
        shadowOpacity: 0.43,
        textShadowRadius: 1,
        elevation: 10,
        shadowOffset: {
            width: 0,
            height: 1 ,
        }
      },

      viewStyle : {
            backgroundColor: themeColors.bgColor(0.2),
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
      },

      totalStyle : {
            backgroundColor: themeColors.bgColor(0.2),
            padding: 24,
            paddingLeft : 32, 
            paddingRight : 32,
            borderTopRightRadius: 24, 
            borderTopLeftRadius: 24,
            marginTop : 16,
            rowGap: 12,
      },
});