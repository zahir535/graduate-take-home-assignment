import { StyleSheet, Text, View, ScrollView, Image, Alert, useColorScheme } from 'react-native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import PageDashboard from '../pages/page-dashboard';
import PageProfile from '../pages/page-profile';

//icon
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

function DashScreen() {
    return (
        <View style={{ flex: 1 }}>
            <PageDashboard />
        </View>
    );
}


function SettingScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <PageProfile
                navigation={navigation}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator
            // DISABLED THE DEFAULT TITLE OF THE 
            // BOTTOM-NAVIGATION
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarActiveBackgroundColor: '#e91e63'
            }}
            initialRouteName="Dashboard"
        >
            <Tab.Screen
                name="Dashboard"
                component={DashScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <MaterialIcons name="dashboard" size={32} color="white" />
                            : <MaterialIcons name="dashboard" size={32} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <Ionicons name="md-person-circle" size={32} color="white" />
                            : <Ionicons name="md-person-circle" size={32} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const DashboardController = () => {
    return (
        <MyTab />
    )
}

export default DashboardController;
