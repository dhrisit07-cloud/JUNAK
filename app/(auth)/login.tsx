import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        // Mock login -> Go to Main Tabs
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <ArrowLeft color={Colors.light.text} size={24} />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.header}>Welcome to JUNAK</Text>
                <Text style={styles.subHeader}>Continue your journey into the heart of Assam.</Text>

                <View style={styles.form}>
                    <Text style={styles.label}>Phone Number or Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. +91 98765 43210"
                        placeholderTextColor="#A0AEC0"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.helperText}>No OTP required for demo</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    backButton: {
        padding: 20,
    },
    content: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        // marginTop: -60, // visual adjustment
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.light.primary,
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 16,
        color: Colors.light.tabIconDefault,
        marginBottom: 40,
    },
    form: {
        gap: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.light.text,
        marginLeft: 4,
    },
    input: {
        backgroundColor: Colors.light.surface,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.light.border,
        fontSize: 16,
    },
    button: {
        backgroundColor: Colors.light.primary,
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    helperText: {
        textAlign: 'center',
        color: Colors.light.tabIconDefault,
        fontSize: 12,
        marginTop: 16,
    },
});
