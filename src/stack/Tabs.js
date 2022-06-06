import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

//views
import MinhasCaronas from "../views/MinhasCaronas";
import Buscar from "../views/Buscar";
import Oferecer from "../views/Oferecer";
import Mensagens from "../views/Mensagens";
import Perfil from "../views/Perfil";
import themes from "../themes";

import PonyButton from "../components/svg/PonyButton"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: themes.padrao.colors.neutral.neutral_6,
                tabBarInactiveTintColor: themes.padrao.colors.neutral.neutral_5,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: themes.padrao.colors.neutral.neutral_0,
                    borderTopColor: themes.padrao.colors.neutral.neutral_5,
                    paddingTop: 4,
                    height: 60
                }
            }} >
                <Tab.Screen 
                    name="Oferecer" 
                    component={Oferecer}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Entypo 
                                name="plus" 
                                size={30} 
                                color={focused ? themes.padrao.colors.neutral.neutral_6
                                               : themes.padrao.colors.neutral.neutral_5} />
                        )
                    }} />
                <Tab.Screen 
                    name="Buscar" 
                    component={Buscar}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name="search" 
                                size={30} 
                                color={focused ? themes.padrao.colors.neutral.neutral_6
                                               : themes.padrao.colors.neutral.neutral_5} />
                        )
                    }} />
                <Tab.Screen 
                    name="MinhasCaronas" 
                    component={MinhasCaronas}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <PonyButton />
                        )
                    }} />
                <Tab.Screen 
                    name="Mensagens" 
                    component={Mensagens}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialIcons
                                name="message"
                                size={30}
                                color={focused ? themes.padrao.colors.neutral.neutral_6
                                               : themes.padrao.colors.neutral.neutral_5} />
                        )
                    }} />
                <Tab.Screen 
                    name="Perfil" 
                    component={Perfil}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name="person-sharp" 
                                size={30} 
                                color={focused ? themes.padrao.colors.neutral.neutral_6
                                               : themes.padrao.colors.neutral.neutral_5} />
                        )
                    }} />
            </Tab.Navigator>
    )
}

export default Tabs;