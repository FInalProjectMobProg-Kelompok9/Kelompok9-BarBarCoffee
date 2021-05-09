import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChartScreen, ChartScreen2, ChartScreen3, ChartScreen4, ChartScreen5, EndScreen, HomeScreen, MenuScreen, OrderScreen, OrderScreen2, OrderScreen3, OrderScreen4, OrderScreen5, SplashScreen } from '../pages';

const Router = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}}/>
            <Stack.Screen name="OrderScreen" component={OrderScreen} options={{headerShown: false}}/>
            <Stack.Screen name="OrderScreen2" component={OrderScreen2} options={{headerShown: false}}/>
            <Stack.Screen name="OrderScreen3" component={OrderScreen3} options={{headerShown: false}}/>
            <Stack.Screen name="OrderScreen4" component={OrderScreen4} options={{headerShown: false}}/>
            <Stack.Screen name="OrderScreen5" component={OrderScreen5} options={{headerShown: false}}/>
            <Stack.Screen name="ChartScreen" component={ChartScreen} options={{headerShown: false}}/>
            <Stack.Screen name="ChartScreen2" component={ChartScreen2} options={{headerShown: false}}/>
            <Stack.Screen name="ChartScreen3" component={ChartScreen3} options={{headerShown: false}}/>
            <Stack.Screen name="ChartScreen4" component={ChartScreen4} options={{headerShown: false}}/>
            <Stack.Screen name="ChartScreen5" component={ChartScreen5} options={{headerShown: false}}/>
            <Stack.Screen name="EndScreen" component={EndScreen} options={{headerShown: false}}/>
            
        </Stack.Navigator>
    )
}

export default Router;
