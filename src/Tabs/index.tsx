import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from './Principal';
import Consultas from './Consultas';
import Ionicons from "react-native-vector-icons/Ionicons"; // Corrigido para Ionicons
import Explorar from './Explorar';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator(); // Corrigido para Tab com letra maiúscula

export default function Tabs() { // Corrigido para Tabs com letra maiúscula
    return (
        <Tab.Navigator // Corrigido para Tab com letra maiúscula
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#002851"
                },
                tabBarActiveTintColor: "#339cff",
                tabBarInactiveTintColor: "#fff"
            }}
        >
            <Tab.Screen name='Principal' component={Principal} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( // Corrigido para Tab com letra maiúscula
                    <Ionicons name="home" // Corrigido para Ionicons
                        color={color}
                        size={size} />
                )
            }} />
            <Tab.Screen name='Explorar' component={Explorar} options={{ // Corrigido para Explorar
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( // Corrigido para Tab com letra maiúscula
                    <Ionicons name="search" // Corrigido para Ionicons
                        color={color}
                        size={size} />
                )
            }} />
            <Tab.Screen name='Perfil' component={Perfil} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( // Corrigido para Tab com letra maiúscula
                    <Ionicons name="person" // Corrigido para Ionicons
                        color={color}
                        size={size} />
                )
            }} />
            <Tab.Screen name='Consultas' component={Consultas} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( // Adicionado color e size
                    <Ionicons name="calendar" // Corrigido para Ionicons
                        color={color}
                        size={size} />
                )
            }} />
        </Tab.Navigator>
    );
}
