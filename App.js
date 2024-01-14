import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TrangChu from '../Zalo/View/TrangChu';
import TrangTinNhan from'../Zalo/View/TrangTinNhan';
import TrangDangKy from '../Zalo/View/TrangDangKy';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TrangChu'>
        <Stack.Screen
          name="TrangChu"
          component={TrangChu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrangTinNhan"
          component={TrangTinNhan}
          options={{ title: 'TinNhan' }}
        />
        <Stack.Screen
          name="TrangDangKy"
          component={TrangDangKy}
          options={{ title: 'DangKy' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
