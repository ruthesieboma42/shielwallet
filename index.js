import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, ScrollView, Image } from 'react-native';
import Onboarding from './src/Onboarding';
import Login from './src/Login';
import Signup from './src/Signup';

const Stack = createNativeStackNavigator();

function SplashScreen() {
    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: "#3B28CC",
            }}>
            <ScrollView  
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                style={{
                    flex: 1,
                    backgroundColor: "#3B28CC",
                }}>
                <View 
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Image
                        source={require('./src/assets/images/Logo.png')} 
                        resizeMode="contain"
                        style={{
                            width: '50%',
                            height: undefined,
                            aspectRatio: 428 / 926,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function Navigation({ showSplash }) {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {showSplash && (
                    <Stack.Screen name="Splash" component={SplashScreen} />
                )}
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Root() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return <Navigation showSplash={showSplash} />;
}

registerRootComponent(Root);