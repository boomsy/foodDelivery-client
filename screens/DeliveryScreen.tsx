import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import MapView, {Marker} from 'react-native-maps'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather"

export default function DeliveryScreen() {
  const restaurant  = featured.restaurants[0];
  const navigation  = useNavigation();

  return (
    <View style={tw`flex-1`}>
      {/* */}

        <MapView  
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }} 
          
          style={tw`flex-1`}
          mapType='standard' >

          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}

            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
          />
      </MapView>

      <View style={tw`rounded-t-3xl -mt-12 bg-white relative`}>

        <View style={tw`flex-row justify-between px-5 pt-10`}>
            <View>
              <Text style={tw`text-lg text-gray-700 font-semibold`}>
                  Estimated Arrival 
              </Text>
              <Text style={tw`text-3xl font-extrabold text-gray-700`}>
                  20-30 Minutes
              </Text>
              <Text style={tw`mt-2 text-gray-700 font-semibold`}>
                  Your order is own its way !
              </Text>
            </View>

            <Image style={tw`w-24 h-24`} source={require('../assets/images/bikeGuy.png')} />
        </View>

        <View style={ styles.viewStyle }>
            <View style={tw`p-1 rounded-full bg-white/25`}>
                <Image style={tw`h-16 w-16 rounded-full`} source={require('../assets/images/deliveryGuy.png')} />
            </View>

            <View style={tw`flex-1 ml-3`}>
              <Text style={tw`text-lg font-bold text-white`}>
                Syed Noman
              </Text>
              <Text style={tw`font-semibold text-white`}>
                Your Rider 
              </Text>
            </View>

            <View style={tw`flex-row items-center mr-3 gap-x-3 `} >
                  <TouchableOpacity  onPress={() => navigation.navigate('OrderPrepairing')}
                        style={tw`bg-white p-2 rounded-full`}>
                        <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={() => navigation.navigate('Home')}
                        style={tw`bg-white p-2 rounded-full`}>
                        <Icon.X stroke={'red'} strokeWidth={4} />
                  </TouchableOpacity>
            </View>
        </View>



      </View>
       
    </View>
  )
}



const styles = StyleSheet.create({
  viewStyle : {
    backgroundColor: themeColors.bgColor(1),
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',

    padding: 8,

    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 9999,
  },
});
