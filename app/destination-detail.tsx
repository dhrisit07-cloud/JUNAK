import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { DESTINATIONS } from '../data/destinations';
import { ArrowLeft, Clock, MapPin, Share2, Heart, ShieldCheck } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function DestinationDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const item = DESTINATIONS.find(d => d.id === id);

    if (!item) return <View><Text>Not Found</Text></View>;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Image Carousel Mock */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.headerButtons}>
                        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                            <ArrowLeft color="white" size={24} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Share2 color="white" size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Heart color="white" size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationRow}>
                        <MapPin color={Colors.light.tabIconDefault} size={16} />
                        <Text style={styles.location}>{item.location}</Text>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statBadge}>
                            <Clock color={Colors.light.primary} size={16} />
                            <Text style={styles.statText}>{item.duration}</Text>
                        </View>
                        <View style={styles.statBadge}>
                            <Text style={styles.statText}>⭐ {item.rating} (120+)</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>About the Experience</Text>
                    <Text style={styles.description}>{item.fullDesc}</Text>

                    <View style={styles.vendorCard}>
                        <View style={styles.vendorHeader}>
                            <View style={styles.vendorIcon}><Text style={{ fontSize: 20 }}>👤</Text></View>
                            <View>
                                <Text style={styles.vendorLabel}>Hosted by</Text>
                                <Text style={styles.vendorName}>{item.vendor.name}</Text>
                            </View>
                            {item.vendor.verified && (
                                <View style={styles.verifiedBadge}>
                                    <ShieldCheck color="white" size={14} />
                                    <Text style={styles.verifiedText}>Verified</Text>
                                </View>
                            )}
                        </View>
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <View style={styles.bottomBar}>
                <View>
                    <Text style={styles.priceLabel}>Total Price</Text>
                    <Text style={styles.price}>₹{item.price}<Text style={styles.perPerson}> / person</Text></Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    imageContainer: {
        height: 300,
        width: width,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerButtons: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        marginTop: -20,
        backgroundColor: Colors.light.background,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 16,
    },
    location: {
        fontSize: 16,
        color: Colors.light.tabIconDefault,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    statBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light.surface,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        gap: 6,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    statText: {
        fontWeight: '600',
        color: Colors.light.text,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.light.border,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#4A5568',
        lineHeight: 24,
        marginBottom: 24,
    },
    vendorCard: {
        backgroundColor: '#F0FFF4',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#C6F6D5',
    },
    vendorHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    vendorIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vendorLabel: {
        fontSize: 12,
        color: Colors.light.tabIconDefault,
    },
    vendorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    verifiedBadge: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: Colors.light.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    verifiedText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.light.surface,
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.light.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceLabel: {
        fontSize: 12,
        color: Colors.light.tabIconDefault,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.primary,
    },
    perPerson: {
        fontSize: 14,
        fontWeight: 'normal',
        color: Colors.light.tabIconDefault,
    },
    bookButton: {
        backgroundColor: Colors.light.primary,
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 12,
    },
    bookButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
