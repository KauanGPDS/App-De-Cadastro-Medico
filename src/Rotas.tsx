import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from "./Login";
import Cadastro from "./Cadastro";
import tabs from "./Tabs";

const tab = createNativeStackNavigator()
export default function Rotas(){
    return(
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <tab.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}}/>
                <tab.Screen name="tabs" component={tabs} options={{headerShown:false}}/>
            </tab.Navigator>
        </NavigationContainer>
    )
}