// @flow 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../components/home';
import  Details  from '../components/details';
const RouteComponent = () => {
    const Navigation = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Navigation.Navigator>
                <Navigation.Screen name="home" component={Home} />
                <Navigation.Screen name="details" component={Details} />
            </Navigation.Navigator>
        </NavigationContainer>
    );
};
export default RouteComponent;