import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to CareerBoost</Text>
            <Text style={styles.subtitle}>Your one-stop solution for internships and job matching!</Text>
            <Button
                title="Build Your Resume"
                onPress={() => navigation.navigate('Resume')}
            />
            <Button
                title="View Job Listings"
                onPress={() => navigation.navigate('Listings')}
            />
            <Button
                title="Match Your Skills"
                onPress={() => navigation.navigate('SkillMatch')}
            />
            <Button
                title="Get Interview Tips"
                onPress={() => navigation.navigate('Tips')}
            />
            <Button
                title="Take Quizzes"
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;