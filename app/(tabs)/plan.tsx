import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function PlanScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Plan Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    text: {
        color: Colors.light.text,
        fontSize: 18,
    },
});
