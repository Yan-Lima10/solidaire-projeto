import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Pages/Home';
import Event from './Pages/Event'
import Profile from './Pages/Profile'
import Search from './Pages/Search'

import { Ionicons } from '@expo/vector-icons'

const tab = createBottomTabNavigator();

function Routes() {
    return (
        <tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#48A2BF',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 20,
                    height: 60,

                    // position: 'absolute',
                    // backgroundColor: '#48A2BF',
                    // borderTopWidth: 0,
                    // bottom: 14,
                    // left: 14,
                    // right: 14,
                    // elevation: 0,
                    // borderRadius: 20,
                    // height: 60,

                }
            }}
        >

            <tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={size} color={color} ></Ionicons>

                        }

                        return <Ionicons name='home-outline' size={size} color={color} ></Ionicons>
                    }
                }}
            />

            <tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='search' size={size} color={color} ></Ionicons>

                        }

                        return <Ionicons name='search-outline' size={size} color={color} ></Ionicons>
                    }
                }}
            />

            <tab.Screen
                name="Event"
                component={Event}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='add' size={size} color={color} ></Ionicons>

                        }

                        return <Ionicons name='add' size={size} color={color} ></Ionicons>
                    }
                }}
            />

            <tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='person' size={size} color={color} ></Ionicons>

                        }

                        return <Ionicons name='person-outline' size={size} color={color} ></Ionicons>
                    }
                }}
            />
        </tab.Navigator>
    )
}

export default Routes;