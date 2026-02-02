import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Map, Calendar, Settings, Sliders } from 'lucide-react-native';
import { Colors, Layout } from '../../constants/Colors';
import { CATEGORIES } from '../../data/categories';
import { DESTINATIONS } from '../../data/destinations';
import { Link, useRouter } from 'expo-router';

// Components (Inline for hackathon speed, move to separate files if needed)
const QuickAction = ({ icon, label, color, onPress }: any) => (
    <TouchableOpacity style={styles.quickAction} onPress={onPress}>
        <View style={[styles.quickActionIcon, { backgroundColor: color + '20' }]}>
            {icon}
        </View>
        <Text style={styles.quickActionLabel}>{label}</Text>
    </TouchableOpacity>
);

const SectionHeader = ({ title, showAll = true }: { title: string, showAll?: boolean }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {showAll && <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>}
    </View>
);

const DestinationCard = ({ item }: any) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => router.push({ pathname: '/destination-detail', params: { id: item.id } })}
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardCategory}>{item.category.toUpperCase()}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardDuration}>⏱ {item.duration}</Text>
                    <Text style={styles.cardPrice}>₹{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default function HomeScreen() {
    const router = useRouter();

    const renderCategoryRow = (category: any) => {
        const items = DESTINATIONS.filter(d => d.category === category.id);
        if (items.length === 0) return null;
        return (
            <View key={category.id} style={styles.sectionContainer}>
                <SectionHeader title={category.title} />
                <FlatList
                    data={items}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <DestinationCard item={item} />}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* 1. Top Bar */}
                <View style={styles.topBar}>
                    <View style={styles.searchContainer}>
                        <Search color={Colors.light.tabIconDefault} size={20} />
                        <TextInput
                            placeholder="Search destination..."
                            style={styles.searchInput}
                            placeholderTextColor={Colors.light.tabIconDefault}
                        />
                    </View>
                    <TouchableOpacity style={styles.profileButton}>
                        {/* Profile Icon Placeholder */}
                        <View style={styles.profileIcon} />
                    </TouchableOpacity>
                </View>

                {/* 2. Hero Section */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1628060867086-44473347b99c?q=80&w=800&auto=format&fit=crop' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroText}>Welcome to{"\n"}Guwahati</Text>
                    </View>
                </View>

                {/* 3. Quick Actions (CRITICAL PLACEMENT) */}
                <View style={styles.quickActionsContainer}>
                    <QuickAction
                        label="Plan"
                        color={Colors.light.primary}
                        icon={<Map color={Colors.light.primary} size={24} />}
                        onPress={() => router.push('/(tabs)/plan')}
                    />
                    <QuickAction
                        label="Bookings"
                        color={Colors.light.secondary}
                        icon={<Calendar color={Colors.light.secondary} size={24} />}
                        onPress={() => router.push('/(tabs)/bookings')}
                    />
                    <QuickAction
                        label="Custom"
                        color={Colors.light.accent}
                        icon={<Sliders color={Colors.light.accent} size={24} />}
                        onPress={() => router.push('/custom-plan')}
                    />
                </View>

                {/* 4. Discovery Sections */}
                <View style={styles.discoveryContainer}>
                    {CATEGORIES.map((cat) => renderCategoryRow(cat))}
                </View>

                {/* Bottom padding for tabs */}
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    topBar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light.surface,
        paddingHorizontal: 16, // Inner padding
        paddingVertical: 12,
        borderRadius: 24, // Rounded pill shape
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: Colors.light.text,
    },
    profileButton: {
        padding: 4,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.light.primary,
    },
    heroContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 24,
        overflow: 'hidden',
        height: 200,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 24,
        justifyContent: 'flex-end',
    },
    heroText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 38,
    },
    quickActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    quickAction: {
        alignItems: 'center',
        gap: 8,
    },
    quickActionIcon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.surface,
    },
    quickActionLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.light.text,
    },
    discoveryContainer: {
        marginTop: 10,
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    viewAll: {
        color: Colors.light.primary,
        fontWeight: '600',
    },
    horizontalList: {
        paddingHorizontal: 20,
        gap: 16,
    },
    card: {
        width: 220,
        backgroundColor: Colors.light.surface,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: Colors.light.border,
    },
    cardImage: {
        width: '100%',
        height: 140,
    },
    cardContent: {
        padding: 12,
    },
    cardCategory: {
        fontSize: 10,
        color: Colors.light.secondary,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginBottom: 8,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardDuration: {
        fontSize: 12,
        color: Colors.light.tabIconDefault,
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.light.primary,
    },
});
