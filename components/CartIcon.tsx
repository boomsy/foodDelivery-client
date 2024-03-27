import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import tw from 'twrnc'
import { themeColors } from '../theme';
import {useRoute, useNavigation} from '@react-navigation/native'


export default function CartIcon() {
      const navigation = useNavigation()

      return (
            <View style={tw`absolute bottom-5 w-full z-50`}>
                  <TouchableOpacity style={ styles.touchStyle } onPress={() => navigation.navigate('Cart')}>
                        <View  style={tw `p-2 px-4 rounded-full bg-white/25`} >
                              <Text style={tw `font-bold text-white text-sm`} >
                                    3
                              </Text>
                        </View>
                        <Text style={tw `flex-1 text-center font-bold text-white text-sm`} >
                              View Cart 
                        </Text>
                        <Text style={tw `font-bold text-white text-sm`} >
                              ${23}
                        </Text>
                  </TouchableOpacity>
            </View>
      )

}


const styles = StyleSheet.create({
      touchStyle : {
        backgroundColor: themeColors.bgColor(1),
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,

        borderRadius: 9999,
        shadowOpacity: 0.43,
        textShadowRadius: 9.51,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 1 ,
        }
      },
});