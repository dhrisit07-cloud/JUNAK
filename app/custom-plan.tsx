import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { ArrowLeft, Sparkles } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const INTERESTS = ['Temples', 'Riverfront', 'Crafts', 'Tea', 'Neighborhoods', 'Food'];

export default function CustomPlan() {
    const router = useRouter();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const toggleInterest = (interest: string) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(i => i !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                    <ArrowLeft color={Colors.light.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Plan Your Day</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.heroSection}>
                    <Sparkles color={Colors.light.accent} size={48} />
                    <Text style={styles.heroTitle}>AI Itinerary Builder</Text>
                    <Text style={styles.heroDesc}>Tell us what you like, and we'll craft the perfect micro-itinerary for you.</Text>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Where are you starting from?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Paltan Bazar"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>How much time do you have?</Text>
                    <View style={styles.durationTabs}>
                        {['2 Hours', '4 Hours', 'Full Day'].map((time) => (
                            <TouchableOpacity key={time} style={styles.durationTab}>
                                <Text style={styles.durationText}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Select your interests</Text>
                    <View style={styles.chipsContainer}>
                        {INTERESTS.map(interest => (
                            <TouchableOpacity
                                key={interest}
                                style={[
                                    styles.chip,
                                    selectedInterests.includes(interest) && styles.chipActive
                                ]}
                                onPress={() => toggleInterest(interest)}
                            >
                                <Text style={[
                                    styles.chipText,
                                    selectedInterests.includes(interest) && styles.chipTextActive
                                ]}>{interest}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.generateBtn}>
                    <Sparkles color="white" size={20} style={{ marginRight: 8 }} />
                    <Text style={styles.generateBtnText}>Generate Plan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    backBtn: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    content: {
        padding: 20,
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: 32,
        backgroundColor: '#FAF5FF',
        padding: 24,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E9D8FD',
    },
    heroTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginTop: 12,
    },
    heroDesc: {
        textAlign: 'center',
        color: Colors.light.tabIconDefault,
        marginTop: 8,
    },
    formGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.text,
        marginBottom: 12,
    },
    input: {
        backgroundColor: Colors.light.surface,
        borderWidth: 1,
        borderColor: Colors.light.border,
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
    },
    durationTabs: {
        flexDirection: 'row',
        gap: 12,
    },
    durationTab: {
        flex: 1,
        backgroundColor: Colors.light.surface,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.light.border,
        alignItems: 'center',
    },
    durationText: {
        color: Colors.light.text,
        fontWeight: '500',
    },
    chipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    chip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
        backgroundColor: Colors.light.surface,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    chipActive: {
        backgroundColor: Colors.light.primary,
        borderColor: Colors.light.primary,
    },
    chipText: {
        color: Colors.light.text,
    },
    chipTextActive: {
        color: 'white',
        fontWeight: '600',
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.light.border,
        backgroundColor: Colors.light.surface,
    },
    generateBtn: {
        backgroundColor: Colors.light.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        borderRadius: 12,
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    generateBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
