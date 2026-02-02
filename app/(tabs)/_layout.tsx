import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Home, Calendar, Map, User } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.light.tint,
                tabBarInactiveTintColor: Colors.light.tabIconDefault,
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 10,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                    backgroundColor: Colors.light.background,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Home color={color} size={24} />,
                }}
            />
            <Tabs.Screen
                name="bookings"
                options={{
                    title: 'Bookings',
                    tabBarIcon: ({ color }) => <Calendar color={color} size={24} />,
                }}
            />
            <Tabs.Screen
                name="plan"
                options={{
                    title: 'My Plan',
                    tabBarIcon: ({ color }) => <Map color={color} size={24} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <User color={color} size={24} />,
                }}
            />
        </Tabs>
    );
}
