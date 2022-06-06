import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//views
import MinhasCaronas from '../views/MinhasCaronas';
import Buscar from '../views/Buscar';
import Oferecer from '../views/Oferecer';
import Mensagens from '../views/Mensagens';
import Perfil from '../views/Perfil';
import Signin from '../views/Signin';
import Signup from '../views/Signup';
import Preload from '../views/Preload';
import Tabs from './Tabs';
import Carona from '../views/Carona';

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Preload"
                screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Preload" component={Preload} />
                    <Stack.Screen name="MinhasCaronas" component={MinhasCaronas} />
                    <Stack.Screen name='Oferecer' component={Oferecer} />
                    <Stack.Screen name='Buscar' component={Buscar} />
                    <Stack.Screen name='Mensagens' component={Mensagens} />
                    <Stack.Screen name='Perfil' component={Perfil} />
                    <Stack.Screen name='Signin' component={Signin} />
                    <Stack.Screen name='Signup' component={Signup} />
                    <Stack.Screen name='Tabs' component={Tabs} />
                    <Stack.Screen name='Carona' component={Carona} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;