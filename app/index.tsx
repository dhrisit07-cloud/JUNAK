import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Image assets (Assam/Guwahati themed)
const IMAGES = {
    topLeft: 'https://images.unsplash.com/photo-1596502282245-12a97aa64894?q=80&w=400&fit=crop', // River/Sunset
    topRight: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=400&fit=crop', // Temple
    bottomLeft: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=400&fit=crop', // Tea
    bottomRight: 'https://images.unsplash.com/photo-1578509376241-02688ca055ee?q=80&w=400&fit=crop', // Rhino (Symbolic)
};

export default function SplashScreen() {
    const router = useRouter();

    const handleStart = () => {
        router.replace('/(auth)/role-selection');
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* Top Image Cluster */}
            <View style={styles.topCluster}>
                <View style={[styles.imageCard, styles.cardTopLeft]}>
                    <Image source={{ uri: IMAGES.topLeft }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={[styles.imageCard, styles.cardTopRight]}>
                    <Image source={{ uri: IMAGES.topRight }} style={styles.image} resizeMode="cover" />
                </View>
            </View>

            {/* Center Branding */}
            <View style={styles.centerContent}>
                <View style={styles.logoBadge}>
                    <Text style={styles.logoText}>J</Text>
                </View>
                <Text style={styles.appName}>JUNAK</Text>

                <Text style={styles.headline}>
                    Discover the Soul{"\n"}
                    <Text style={styles.headlineAccent}>&</Text>{"\n"}
                    Heritage of Assam
                </Text>

                <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.8}>
                    <Text style={styles.startButtonText}>Start Journey</Text>
                    <ArrowRight color="white" size={20} />
                </TouchableOpacity>
            </View>

            {/* Bottom Image Cluster */}
            <View style={styles.bottomCluster}>
                <View style={[styles.imageCard, styles.cardBottomLeft]}>
                    <Image source={{ uri: IMAGES.bottomLeft }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={[styles.imageCard, styles.cardBottomRight]}>
                    <Image source={{ uri: IMAGES.bottomRight }} style={styles.image} resizeMode="cover" />
                </View>
            </View>

            <Text style={styles.footerText}>Powering magical trips for Guwahati</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    imageCard: {
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
        position: 'absolute',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    // Positioning Top
    topCluster: {
        height: height * 0.35,
        position: 'relative',
        top: -20,
    },
    cardTopLeft: {
        width: 140,
        height: 180,
        top: 40,
        left: -20,
        transform: [{ rotate: '-12deg' }],
    },
    cardTopRight: {
        width: 160,
        height: 220,
        top: 10,
        right: -30,
        transform: [{ rotate: '15deg' }],
    },

    // Positioning Bottom
    bottomCluster: {
        height: height * 0.35,
        position: 'relative',
        bottom: -40,
    },
    cardBottomLeft: {
        width: 180,
        height: 140,
        bottom: 80,
        left: -40,
        transform: [{ rotate: '8deg' }],
    },
    cardBottomRight: {
        width: 150,
        height: 200,
        bottom: 40,
        right: -20,
        transform: [{ rotate: '-10deg' }],
    },

    // Center Content
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        marginTop: -40, // Pull up slightly to center between clusters
    },
    logoBadge: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.light.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    logoText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.light.primary,
        marginBottom: 20,
        letterSpacing: 4,
    },
    headline: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.light.text,
        textAlign: 'center',
        lineHeight: 40,
        fontFamily: 'serif',
        marginBottom: 32,
    },
    headlineAccent: {
        fontStyle: 'italic',
        color: Colors.light.accent,
        fontSize: 28,
    },
    startButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light.primary,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 30,
        gap: 8,
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 6,
    },
    startButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        textAlign: 'center',
        color: Colors.light.tabIconDefault,
        fontSize: 12,
        paddingBottom: 20,
        opacity: 0.8,
    },
});
