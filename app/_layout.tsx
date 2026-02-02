import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '../constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        // We can load custom fonts here if needed, for now using system defaults or we can add Google Fonts later.
        // 'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.light.background } }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)/role-selection" options={{ animation: 'fade' }} />
                <Stack.Screen name="(auth)/login" options={{ presentation: 'modal' }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="dark" />
        </>
    );
}
