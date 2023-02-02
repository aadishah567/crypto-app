import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import CoinDetailScreen from "../screens/CoinDetailScreen";
import CoinDetailScreenCopy from "../screens/CoinDetailScreen copy";
import CoinDetailScreencopy2 from "../screens/CoinDetailScreen copy 2";


const Stack = createNativeStackNavigator();
const Navigator = ()=>{
return(
<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name={"Home"} component={HomeScreen}/>
    <Stack.Screen name={"CoinDetailedScreen"} component={CoinDetailScreen}/>
    <Stack.Screen name={"CoinDetailScreenCopy"} component={CoinDetailScreenCopy}/>
    <Stack.Screen name={"CoinDetailedScreencopy2"} component={CoinDetailScreencopy2}/>


</Stack.Navigator>
)
}

export default Navigator;