import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Briefcase, Map, User, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const RoleCard = ({ title, icon, description, onPress, index }: any) => {
    const slideAnim = useRef(new Animated.Value(50)).current; // Start 50px below
    const fadeAnim = useRef(new Animated.Value(0)).current;   // Start invisible

    useEffect(() => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                delay: index * 150, // Stagger effect
                useNativeDriver: true,
                easing: Easing.out(Easing.back(1.5)), // Spring-like feel
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                delay: index * 150,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <Animated.View style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
        }}>
            <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
                <View style={styles.iconBox}>
                    {icon}
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardDesc}>{description}</Text>
                </View>
                <ChevronRight color={Colors.light.tabIconDefault} size={20} />
            </TouchableOpacity>
        </Animated.View>
    );
};

export default function RoleSelection() {
    const router = useRouter();

    const handleRoleSelect = (role: string) => {
        router.push('/(auth)/login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.question}>What defines you?</Text>
                <Text style={styles.subQuestion}>Choose your journey in JUNAK</Text>
            </View>

            <View style={styles.listContainer}>
                <RoleCard
                    index={0}
                    title="Visitor / Traveller"
                    icon={<User color={Colors.light.primary} size={28} />}
                    description="I want to explore Guwahati's culture."
                    onPress={() => handleRoleSelect('visitor')}
                />
                <RoleCard
                    index={1}
                    title="Business Owner"
                    icon={<Briefcase color={Colors.light.secondary} size={28} />}
                    description="I want to list my unique stay or craft."
                    onPress={() => handleRoleSelect('business')}
                />
                <RoleCard
                    index={2}
                    title="Travel Guide"
                    icon={<Map color={Colors.light.accent} size={28} />}
                    description="I want to host local experiences."
                    onPress={() => handleRoleSelect('guide')}
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Authentic Experiences • Local Stories</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA', // Crisp off-white
        padding: 24,
    },
    header: {
        marginTop: 60,
        marginBottom: 40,
    },
    question: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1A202C',
        fontFamily: 'serif',
        letterSpacing: -0.5,
    },
    subQuestion: {
        fontSize: 16,
        color: '#718096',
        marginTop: 8,
        fontStyle: 'italic',
    },
    listContainer: {
        gap: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#2D3748",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
    },
    iconBox: {
        width: 64,
        height: 64,
        borderRadius: 18,
        backgroundColor: '#F7FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2D3748',
        marginBottom: 4,
        letterSpacing: -0.3,
    },
    cardDesc: {
        fontSize: 13,
        color: '#718096',
        lineHeight: 18,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#A0AEC0',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});
